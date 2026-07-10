"""Combine rules into a single position signal per bar."""
from __future__ import annotations

import pandas as pd

from .features import add_features
from .ingest import RuleSet


def build_signal(df: pd.DataFrame, rules: RuleSet, cfg: dict) -> pd.DataFrame:
    """Return df with features + a `position` column in {-1, 0, +1}.

    Long rules add +weight when their condition is true; short rules add -weight.
    Net exposure is clamped to [-1, +1] and shifted one bar so we only act on the
    NEXT bar's open (no look-ahead).
    """
    feats = add_features(df, cfg)
    score = pd.Series(0.0, index=feats.index)
    for rule in rules.rules:
        sig = rule.signal(feats).astype(float) * rule.weight
        score = score + (sig if rule.side == "long" else -sig)

    position = score.clip(-1, 1)
    threshold = cfg.get("entry_threshold", 0.5)
    position = position.where(position.abs() >= threshold, 0.0)
    # Only trade LONG unless shorts are explicitly enabled (futures shorting is real
    # but riskier; opt in deliberately).
    if not cfg.get("allow_short", False):
        position = position.clip(lower=0.0)

    feats["signal"] = position
    feats["position"] = position.shift(1).fillna(0.0)  # act next bar -> no look-ahead
    return feats
