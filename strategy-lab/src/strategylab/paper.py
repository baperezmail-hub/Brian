"""Minimal paper-trading loop skeleton.

This is intentionally a STUB that trades against a data feed with a simulated
account. It is the gate between "the backtest looked good" and "real money".
Wire a real broker (Interactive Brokers via ib_insync, etc.) into `Broker`
ONLY after weeks of paper results you trust.
"""
from __future__ import annotations

from dataclasses import dataclass, field


@dataclass
class PaperBroker:
    """Simulated account. No real orders are ever sent."""

    cash: float = 100_000.0
    position: float = 0.0          # signed units
    avg_price: float = 0.0
    fills: list = field(default_factory=list)

    def target(self, desired_units: float, price: float) -> None:
        delta = desired_units - self.position
        if abs(delta) < 1e-9:
            return
        self.cash -= delta * price
        if (self.position >= 0) == (delta >= 0) and self.position != 0:
            total = self.position + delta
            self.avg_price = (self.avg_price * self.position + price * delta) / total
        else:
            self.avg_price = price
        self.position = desired_units
        self.fills.append({"units": delta, "price": price})

    def equity(self, mark: float) -> float:
        return self.cash + self.position * mark


def run_paper_session(feats, get_units) -> PaperBroker:
    """Replay `feats` bar by bar as if live. `get_units(row) -> desired signed units`.

    Swap this loop's data source for a live feed and PaperBroker for a real broker
    adapter when you're ready. Keep the same interface so nothing else changes.
    """
    broker = PaperBroker()
    for _, row in feats.iterrows():
        price = float(row["close"])
        broker.target(get_units(row), price)
    return broker
