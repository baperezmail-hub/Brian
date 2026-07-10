"""Vectorized backtester with realistic-ish costs and honest metrics.

Deliberately simple and transparent: you can read every line and know exactly
what it assumes. It is NOT a substitute for a real execution simulator, but it
is enough to reject bad ideas cheaply before risking money.
"""
from __future__ import annotations

from dataclasses import dataclass, asdict

import numpy as np
import pandas as pd


@dataclass
class BacktestResult:
    equity: pd.Series
    returns: pd.Series
    trades: int
    total_return: float
    cagr: float
    sharpe: float
    max_drawdown: float
    win_rate: float
    exposure: float

    def summary(self) -> dict:
        d = asdict(self)
        d.pop("equity")
        d.pop("returns")
        return d


def run_backtest(
    feats: pd.DataFrame,
    *,
    cost_bps: float = 1.0,        # per-side transaction cost in basis points
    slippage_bps: float = 1.0,   # per-side slippage in basis points
    periods_per_year: int = 252,
    starting_equity: float = 100_000.0,
) -> BacktestResult:
    """`feats` must contain 'close' and 'position' (already lagged, in [-1, 1])."""
    px = feats["close"]
    pos = feats["position"].fillna(0.0)
    bar_ret = px.pct_change().fillna(0.0)

    # Cost charged whenever position changes (turnover), per side.
    turnover = pos.diff().abs().fillna(pos.abs())
    per_side = (cost_bps + slippage_bps) / 10_000.0
    costs = turnover * per_side

    strat_ret = pos * bar_ret - costs
    equity = starting_equity * (1 + strat_ret).cumprod()

    trades = int((pos.diff().abs() > 1e-9).sum())
    total_return = float(equity.iloc[-1] / starting_equity - 1)

    years = max(len(px) / periods_per_year, 1e-9)
    cagr = float((equity.iloc[-1] / starting_equity) ** (1 / years) - 1)

    vol = strat_ret.std()
    sharpe = float(np.sqrt(periods_per_year) * strat_ret.mean() / vol) if vol > 0 else 0.0

    running_max = equity.cummax()
    drawdown = equity / running_max - 1
    max_dd = float(drawdown.min())

    active = strat_ret[pos.abs() > 1e-9]
    win_rate = float((active > 0).mean()) if len(active) else 0.0
    exposure = float((pos.abs() > 1e-9).mean())

    return BacktestResult(
        equity=equity,
        returns=strat_ret,
        trades=trades,
        total_return=total_return,
        cagr=cagr,
        sharpe=sharpe,
        max_drawdown=max_dd,
        win_rate=win_rate,
        exposure=exposure,
    )
