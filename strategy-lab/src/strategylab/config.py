"""Default strategy/backtest configuration. Override per-run as needed."""
from __future__ import annotations

DEFAULT_CONFIG: dict = {
    # feature windows
    "sma_fast": 20,
    "sma_slow": 50,
    "rsi_n": 14,
    "atr_n": 14,
    # position construction
    "entry_threshold": 0.5,
    "allow_short": False,
    # costs (basis points, per side)
    "cost_bps": 1.0,
    "slippage_bps": 1.0,
    "periods_per_year": 252,
    "starting_equity": 100_000.0,
}
