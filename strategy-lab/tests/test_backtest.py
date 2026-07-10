"""Smoke + correctness tests. Run: pytest -q  (or: python -m pytest)"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))

import numpy as np  # noqa: E402
import pandas as pd  # noqa: E402

from strategylab import data as datamod  # noqa: E402
from strategylab.backtest import run_backtest  # noqa: E402
from strategylab.config import DEFAULT_CONFIG  # noqa: E402
from strategylab.ingest import Rule, load_rules  # noqa: E402
from strategylab.strategy import build_signal  # noqa: E402


def test_synthetic_shape():
    df = datamod.synthetic(n=200)
    assert list(df.columns) == ["open", "high", "low", "close", "volume"]
    assert (df["high"] >= df["low"]).all()
    assert len(df) == 200


def test_end_to_end_runs():
    df = datamod.synthetic(n=400)
    root = Path(__file__).resolve().parents[1]
    rules = load_rules(str(root / "vault"), str(root / "transcripts"))
    assert len(rules) >= 1
    feats = build_signal(df, rules, DEFAULT_CONFIG)
    assert feats["position"].abs().max() <= 1.0 + 1e-9
    res = run_backtest(feats)
    assert np.isfinite(res.sharpe)
    assert -1.0 <= res.max_drawdown <= 0.0


def test_no_lookahead():
    # position must be the signal shifted by one bar (act on next bar).
    df = datamod.synthetic(n=120)
    root = Path(__file__).resolve().parents[1]
    rules = load_rules(str(root / "vault"), str(root / "transcripts"))
    feats = build_signal(df, rules, DEFAULT_CONFIG)
    assert feats["position"].iloc[0] == 0.0
    pd.testing.assert_series_equal(
        feats["position"].iloc[1:].reset_index(drop=True),
        feats["signal"].shift(1).fillna(0.0).iloc[1:].reset_index(drop=True),
        check_names=False,
    )


def test_rule_rejects_malicious_when():
    bad = Rule(name="evil", when="__import__('os').system('echo hi')")
    df = datamod.synthetic(n=60)
    feats = build_signal(df, load_rules(), DEFAULT_CONFIG)  # empty ruleset -> just features
    try:
        bad.signal(feats)
        assert False, "should have rejected disallowed characters"
    except ValueError:
        pass
