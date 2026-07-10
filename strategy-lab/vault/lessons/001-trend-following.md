# Lesson 001 — Trend following basics

Notes distilled from lessons/transcripts. The prose is for humans; the fenced
`rule` block is what the code reads. Keep every tradeable idea in a rule block so
nothing runs that you didn't explicitly write and review.

The classic idea: go long when the fast average is above the slow average, but
don't chase when momentum is already overheated (RSI too high).

```rule
name: trend_long
when: sma_fast > sma_slow and rsi < 70
side: long
weight: 1.0
source: lessons/001-trend-following.md
```
