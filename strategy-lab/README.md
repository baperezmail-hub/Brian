# strategy-lab

A reproducible pipeline that turns **notes + lesson transcripts** into **codified,
testable trading rules** — the honest version of "I hooked an Obsidian vault and a
thousand transcripts up to code and derived a strategy."

```
Obsidian vault + transcripts  →  extracted rules  →  backtest  →  paper trade  →  (maybe) tiny live
        (ingest.py)               (strategy.py)     (backtest.py)   (paper.py)
```

It runs **out of the box on synthetic data** so you can see the whole loop with zero
setup, then you swap in real data and your own notes.

## ⚠️ Read this first

- **"Up $3.4k in a week" is noise, not proof.** A random system has good weeks. The
  only thing that transfers is the *workflow*, never the returns. Nobody — no model,
  no person — can promise you a profitable strategy.
- **Backtest → paper trade → tiny size, in that order.** This repo makes you pass
  each gate. Don't skip them.
- **Futures use leverage. You can lose more than you deposit.** Trade only money you
  can afford to lose to zero. This code is educational, not financial advice.

## Quickstart

```bash
cd strategy-lab
python3 -m venv .venv && source .venv/bin/activate      # optional but recommended
pip install -r requirements.txt
python scripts/run_backtest.py            # runs on synthetic data + sample rules
pytest -q                                 # 4 tests
```

Use real data:

```bash
python scripts/run_backtest.py --download --symbol ES=F     # needs yfinance + network
python scripts/run_backtest.py --csv data/your_ohlcv.csv    # your own file
```

## How you add a strategy

You never hand-edit signal code. You write a note (in `vault/` or `transcripts/`)
containing a fenced ` ```rule ` block. The ingester reads only those blocks, so
nothing trades that you didn't explicitly author and review.

````markdown
```rule
name: trend_long
when: sma_fast > sma_slow and rsi < 70
side: long
weight: 1.0
```
````

`when` is a boolean expression over the feature columns in `src/strategylab/features.py`
(`close`, `sma_fast`, `sma_slow`, `rsi`, `atr`, `volume`, ...). It's evaluated in a
sandboxed namespace — no imports, no builtins — so a note can't run arbitrary code.

Add features in `features.py`, add rules in your vault, re-run the backtest. That's the loop.

## Layout

| Path | What it does |
|------|--------------|
| `src/strategylab/data.py`      | load CSV / download (yfinance) / synthetic data |
| `src/strategylab/features.py`  | indicators (SMA, EMA, RSI, ATR) — add your own |
| `src/strategylab/ingest.py`    | vault/transcripts → `Rule` objects (sandboxed) |
| `src/strategylab/strategy.py`  | rules → position signal, one-bar lag (no look-ahead) |
| `src/strategylab/backtest.py`  | vectorized backtest + honest metrics |
| `src/strategylab/paper.py`     | paper-trading stub (the gate before real money) |
| `scripts/run_backtest.py`      | end-to-end runner |
| `vault/`, `transcripts/`       | your notes; sample rules included |
| `tests/`                       | correctness + no-look-ahead tests |

See **WORKFLOW.md** for the "Claude brain chat + Claude Code worker" loop.
