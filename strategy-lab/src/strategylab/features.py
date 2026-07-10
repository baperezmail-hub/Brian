"""Technical features / indicators computed from OHLCV data.

Pure pandas so there are no compiled dependencies. Add your own here as your
notes and transcripts suggest new signals.
"""
from __future__ import annotations

import numpy as np
import pandas as pd


def sma(s: pd.Series, n: int) -> pd.Series:
    return s.rolling(n).mean()


def ema(s: pd.Series, n: int) -> pd.Series:
    return s.ewm(span=n, adjust=False).mean()


def rsi(s: pd.Series, n: int = 14) -> pd.Series:
    delta = s.diff()
    gain = delta.clip(lower=0).ewm(alpha=1 / n, adjust=False).mean()
    loss = (-delta.clip(upper=0)).ewm(alpha=1 / n, adjust=False).mean()
    rs = gain / loss.replace(0, np.nan)
    return (100 - 100 / (1 + rs)).fillna(50)


def atr(df: pd.DataFrame, n: int = 14) -> pd.Series:
    prev_close = df["close"].shift(1)
    tr = pd.concat(
        [
            df["high"] - df["low"],
            (df["high"] - prev_close).abs(),
            (df["low"] - prev_close).abs(),
        ],
        axis=1,
    ).max(axis=1)
    return tr.ewm(alpha=1 / n, adjust=False).mean()


def add_features(df: pd.DataFrame, cfg: dict) -> pd.DataFrame:
    out = df.copy()
    out["sma_fast"] = sma(out["close"], cfg.get("sma_fast", 20))
    out["sma_slow"] = sma(out["close"], cfg.get("sma_slow", 50))
    out["rsi"] = rsi(out["close"], cfg.get("rsi_n", 14))
    out["atr"] = atr(out, cfg.get("atr_n", 14))
    return out
