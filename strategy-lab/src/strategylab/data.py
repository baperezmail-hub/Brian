"""Load or generate OHLCV price data for backtesting."""
from __future__ import annotations

import numpy as np
import pandas as pd


REQUIRED_COLS = ["open", "high", "low", "close", "volume"]


def load_csv(path: str) -> pd.DataFrame:
    """Load OHLCV data from a CSV with a datetime index.

    Expected columns (case-insensitive): date/datetime, open, high, low, close, volume.
    """
    df = pd.read_csv(path)
    df.columns = [c.strip().lower() for c in df.columns]
    date_col = next((c for c in ("datetime", "date", "timestamp") if c in df.columns), None)
    if date_col is None:
        raise ValueError("CSV needs a 'date' / 'datetime' / 'timestamp' column")
    df[date_col] = pd.to_datetime(df[date_col])
    df = df.set_index(date_col).sort_index()
    missing = [c for c in REQUIRED_COLS if c not in df.columns]
    if missing:
        raise ValueError(f"CSV missing required columns: {missing}")
    return df[REQUIRED_COLS].astype(float)


def download(symbol: str = "ES=F", period: str = "2y", interval: str = "1d") -> pd.DataFrame:
    """Download OHLCV via yfinance. ES=F is E-mini S&P futures; NQ=F, CL=F, GC=F, etc.

    Requires `pip install yfinance` and network access.
    """
    import yfinance as yf

    raw = yf.download(symbol, period=period, interval=interval, auto_adjust=False, progress=False)
    if raw.empty:
        raise RuntimeError(f"No data returned for {symbol}. Check symbol/interval/network.")
    if isinstance(raw.columns, pd.MultiIndex):
        raw.columns = raw.columns.get_level_values(0)
    raw.columns = [str(c).lower() for c in raw.columns]
    raw = raw.rename(columns={"adj close": "adj_close"})
    raw.index.name = "datetime"
    return raw[REQUIRED_COLS].astype(float)


def synthetic(n: int = 750, seed: int = 7, start: str = "2022-01-03") -> pd.DataFrame:
    """Generate a reproducible synthetic OHLCV series so the project runs with zero setup.

    Geometric random walk with mild autocorrelation so trend/mean-reversion rules have
    something to bite on. NOT real data — for wiring/tests only.
    """
    rng = np.random.default_rng(seed)
    rets = rng.normal(0.0003, 0.011, n)
    rets = pd.Series(rets).ewm(span=3).mean().to_numpy()  # mild momentum
    close = 4000 * np.exp(np.cumsum(rets))
    idx = pd.bdate_range(start=start, periods=n, name="datetime")
    close = pd.Series(close, index=idx)
    intrabar = np.abs(rng.normal(0, 0.004, n)) * close.to_numpy()
    df = pd.DataFrame(
        {
            "open": close.shift(1).fillna(close.iloc[0]).to_numpy(),
            "high": close.to_numpy() + intrabar,
            "low": close.to_numpy() - intrabar,
            "close": close.to_numpy(),
            "volume": rng.integers(5_000, 50_000, n).astype(float),
        },
        index=idx,
    )
    df["high"] = df[["high", "open", "close"]].max(axis=1)
    df["low"] = df[["low", "open", "close"]].min(axis=1)
    return df
