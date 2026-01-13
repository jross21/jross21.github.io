---
title: "Building Self-Serve Analytics for GTM Teams"
description: "Designed a semantic layer that let sales and marketing answer their own questions without waiting for data requests."
featured: false
---

## Context

The data team had become a bottleneck. Every question—"how many leads came from this campaign?", "what's our win rate by segment?"—required a data request, a 3-day SLA, and analyst time. Marketing couldn't iterate on campaigns. Sales leadership couldn't get pipeline visibility. The data team was drowning in ad-hoc requests.

## Approach

Built a self-serve analytics layer that let business users answer their own questions without writing SQL.

### The Architecture

Three components:

1. **Semantic layer** — Business-friendly definitions on top of raw data
2. **Curated dashboards** — Pre-built views for common questions
3. **Exploration interface** — Drag-and-drop for ad-hoc analysis

```yaml
# Example semantic model
metrics:
  - name: conversion_rate
    description: "Leads that became opportunities, as a percentage"
    formula: "COUNT(opportunities) / COUNT(leads)"
    dimensions: [source, campaign, segment, date]
```

### Key Design Decisions

- **Guardrails over training** — Instead of teaching SQL, limit what users can break
- **Definitions over flexibility** — One way to calculate each metric, enforced
- **Access over perfection** — Ship fast, iterate based on feedback

## Implementation

Phased rollout by team:

- **Week 1-2**: Built semantic layer for marketing metrics (leads, campaigns, attribution)
- **Week 3-4**: Deployed to marketing team, gathered feedback
- **Week 5-6**: Expanded to sales metrics (pipeline, win rate, velocity)
- **Week 7-8**: Deployed to sales leadership

Spent significant time on metric definitions. "MQL" alone required 4 meetings to get a definition everyone agreed on.

## Results

- Ad-hoc data requests reduced by 70%
- Time to answer common questions: 3 days → 5 minutes
- Marketing team running experiments without data team involvement
- Data team shifted from reporting to infrastructure work

## Reflection

Self-serve analytics isn't about tools—it's about trust. Business users need to trust that the numbers are correct. Data teams need to trust that users won't create misleading reports. That trust comes from clear definitions, good documentation, and guardrails that prevent obvious errors. The technology was simple. Building organizational confidence was the real work.
