#!/usr/bin/env python3
"""Run a backtest end-to-end: load data -> load rules -> build signal -> report.

Examples:
    python scripts/run_backtest.py                       # synthetic data, sample rules
    python scripts/run_backtest.py --csv data/es.csv     # your own OHLCV CSV
    python scripts/run_backtest.py --symbol ES=F --download   # yfinance download
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

# allow running without installing the package
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))

from strategylab import data as datamod  # noqa: E402
from strategylab.backtest import run_backtest  # noqa: E402
from strategylab.config import DEFAULT_CONFIG  # noqa: E402
from strategylab.ingest import load_rules  # noqa: E402
from strategylab.strategy import build_signal  # noqa: E402


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--csv", help="OHLCV csv path")
    ap.add_argument("--symbol", default="ES=F", help="yfinance symbol (with --download)")
    ap.add_argument("--download", action="store_true", help="download via yfinance")
    ap.add_argument("--vault", default="vault", help="obsidian vault dir")
    ap.add_argument("--transcripts", default="transcripts", help="transcripts dir")
    args = ap.parse_args()

    root = Path(__file__).resolve().parents[1]

    if args.csv:
        df = datamod.load_csv(args.csv)
        src = args.csv
    elif args.download:
        df = datamod.download(args.symbol)
        src = f"yfinance:{args.symbol}"
    else:
        df = datamod.synthetic()
        src = "synthetic (no real data — wiring/demo only)"

    rules = load_rules(str(root / args.vault), str(root / args.transcripts))
    print(f"Data:   {src}  ({len(df)} bars, {df.index[0].date()} -> {df.index[-1].date()})")
    print(f"Rules:  {len(rules)} loaded")
    for r in rules.rules:
        print(f"   - {r.name}: [{r.side}] when {r.when}  (w={r.weight})")
    if len(rules) == 0:
        print("No rules found. Add ```rule blocks to your vault/transcripts. Aborting.")
        return 1

    feats = build_signal(df, rules, DEFAULT_CONFIG)
    res = run_backtest(
        feats,
        cost_bps=DEFAULT_CONFIG["cost_bps"],
        slippage_bps=DEFAULT_CONFIG["slippage_bps"],
        periods_per_year=DEFAULT_CONFIG["periods_per_year"],
        starting_equity=DEFAULT_CONFIG["starting_equity"],
    )

    print("\n=== Backtest result ===")
    for k, v in res.summary().items():
        if k in ("total_return", "cagr", "max_drawdown", "win_rate", "exposure"):
            print(f"  {k:14s}: {v:+.2%}")
        elif k == "sharpe":
            print(f"  {k:14s}: {v:.2f}")
        else:
            print(f"  {k:14s}: {v}")
    print("\nReminder: a good backtest is necessary but NOT sufficient. Paper-trade next.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
