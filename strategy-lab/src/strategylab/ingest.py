"""Turn an Obsidian vault + lesson transcripts into machine-usable strategy rules.

This is the piece that mirrors the "obsidian vault hooked up to code + synthesized
transcripts" idea. It does NOT invent a strategy on its own. It extracts *candidate*
rules that a human (or a Claude 'brain' chat) has written down in a structured block,
so nothing gets traded that you didn't explicitly author and review.

Format expected inside any .md note (fenced ```rule block):

    ```rule
    name: golden_cross
    when: sma_fast > sma_slow and rsi < 70
    side: long
    weight: 1.0
    source: lessons/012-trend-following.md
    ```

`when` is a boolean expression over feature columns (see features.py). It is
evaluated with a restricted namespace — no builtins, no imports — so a note can't
execute arbitrary code.
"""
from __future__ import annotations

import re
from dataclasses import dataclass, field
from pathlib import Path

import pandas as pd

_RULE_BLOCK = re.compile(r"```rule\s*\n(.*?)```", re.DOTALL)
# Only feature columns + numbers + comparison/logic operators are allowed in `when`.
_ALLOWED_WHEN = re.compile(r"^[\w\s\.\+\-\*/\(\)<>=!&|]+$")


@dataclass
class Rule:
    name: str
    when: str
    side: str = "long"          # "long" or "short"
    weight: float = 1.0
    source: str = ""
    notes: str = ""

    def signal(self, feats: pd.DataFrame) -> pd.Series:
        """Evaluate `when` against a features DataFrame -> boolean Series."""
        if not _ALLOWED_WHEN.match(self.when):
            raise ValueError(f"Rule '{self.name}' has a disallowed character in `when`: {self.when!r}")
        # Wrap operands in parens so bitwise &/| don't outrank the comparisons:
        # "a > b and c < d"  ->  "(a > b) & (c < d)"
        expr = "(" + self.when.replace(" and ", ") & (").replace(" or ", ") | (") + ")"
        # Restricted eval: only the feature columns are in scope, no builtins.
        env = {c: feats[c] for c in feats.columns}
        try:
            result = eval(expr, {"__builtins__": {}}, env)  # noqa: S307 - sandboxed namespace
        except Exception as e:  # noqa: BLE001
            raise ValueError(f"Rule '{self.name}' failed to evaluate: {e}") from e
        return pd.Series(result, index=feats.index).fillna(False).astype(bool)


@dataclass
class RuleSet:
    rules: list[Rule] = field(default_factory=list)

    def __len__(self) -> int:
        return len(self.rules)


def _parse_block(text: str, source: str) -> Rule | None:
    fields: dict[str, str] = {}
    for line in text.strip().splitlines():
        if ":" not in line:
            continue
        key, _, val = line.partition(":")
        fields[key.strip().lower()] = val.strip()
    if "name" not in fields or "when" not in fields:
        return None
    return Rule(
        name=fields["name"],
        when=fields["when"],
        side=fields.get("side", "long").lower(),
        weight=float(fields.get("weight", 1.0)),
        source=fields.get("source", source),
        notes=fields.get("notes", ""),
    )


def load_rules(*dirs: str) -> RuleSet:
    """Scan directories (vault, transcripts) for ```rule blocks and return a RuleSet."""
    rules: list[Rule] = []
    for d in dirs:
        base = Path(d)
        if not base.exists():
            continue
        for md in sorted(base.rglob("*.md")):
            text = md.read_text(encoding="utf-8", errors="ignore")
            for block in _RULE_BLOCK.findall(text):
                rule = _parse_block(block, source=str(md))
                if rule:
                    rules.append(rule)
    return RuleSet(rules)
