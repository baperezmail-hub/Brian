# Transcript excerpt — buying pullbacks in an uptrend

> "...the setup I keep seeing win is: the trend is clearly up, price is above the
> longer average, but the short-term gets oversold and snaps back. That dip is
> where I want to be a buyer, not a seller..."

Synthesized into a rule: uptrend confirmed by the slow average, RSI oversold.

```rule
name: uptrend_pullback
when: close > sma_slow and rsi < 35
side: long
weight: 0.8
source: transcripts/example-pullback.md
```
