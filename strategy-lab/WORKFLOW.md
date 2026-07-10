# The "brain + worker" workflow

The setup you described — a normal Claude chat as your **brain**, a Claude Code
session as your **worker**, pasting outputs back and forth — is a real and effective
pattern. Here's how to run it against this repo without fooling yourself.

## The loop

1. **Brain (chat):** describe a goal in one sentence — *"test whether buying RSI<30
   pullbacks in an ES uptrend beats buy-and-hold, net of costs."* Ask it to turn that
   into a concrete rule block + what metric would confirm/kill the idea.
2. **Worker (Claude Code):** paste the rule into a note under `vault/`, run
   `python scripts/run_backtest.py`, paste the metrics back to the brain.
3. **Brain:** interpret results, propose the next change (tighten a threshold, add a
   filter, reject the idea). One change at a time.
4. Repeat until an idea survives, then move it to the paper-trading gate.

Keeping the brain and worker separate is what makes each step "a step forward": the
brain reasons about *what* to test, the worker produces *ground truth* the brain can't
hand-wave past.

## Gates (do not skip)

| Gate | Pass condition (example — set your own) | Tool |
|------|------|------|
| **Backtest** | positive after realistic costs, Sharpe > 1, max drawdown you can stomach, out-of-sample holdout still works | `run_backtest.py` |
| **Paper trade** | 4–8+ weeks of *live-data* paper results matching backtest expectations | `paper.py` (wire a live feed) |
| **Tiny live** | 1 micro contract, real fills ≈ paper fills, for weeks, before scaling anything | your broker adapter |

## Traps this pipeline is built to avoid

- **Look-ahead bias:** positions are lagged one bar (`strategy.py`). You act on the
  *next* bar, never the bar you're deciding on. There's a test for it.
- **Overfitting:** if you tried 200 rule tweaks and kept the best, you fit noise.
  Hold out data, keep the rule count small, be suspicious of anything too clean.
- **Ignoring costs:** the backtest charges commission + slippage on every turnover.
  Many "profitable" strategies die once costs are real.
- **Survivorship in the story:** the person up $3.4k this week is who you heard from.
  The ones who blew up didn't post.

## When (not) to add plugins/MCPs

The advice to "always use plugins/MCPs" is overstated. For this project you need
almost none — plain Python does the work. Useful add-ons *if* you actually hit the need:

- a data-provider MCP/API when free yfinance data isn't enough (intraday futures, tick data)
- your broker's own API/SDK for paper + live (Interactive Brokers, etc.)

Everything else is optional. Don't let tooling become procrastination from the boring,
decisive part: honest backtests and weeks of paper trading.
