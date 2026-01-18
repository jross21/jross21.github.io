---
title: "Snowflake"
description: "The data warehouse that scales without making you think about infrastructure."
category: "data"
verdict: "Expensive, but the engineering time saved on infrastructure usually justifies it."
use_when: "You need to query large datasets without managing infrastructure, or your data team shouldn't be doing DevOps."
skip_when: "Your data fits in Postgres, you're extremely cost-sensitive, or real-time streaming is core to your use case."
---

Snowflake solved the right problem: letting data teams focus on data instead of infrastructure.

Separation of storage and compute means you scale queries without over-provisioning. The SQL is standard enough that existing skills transfer. The ecosystem—connectors, integrations, partners—is mature.

The compute model is the key insight. Spin up a warehouse, run your queries, shut it down. You pay for actual work, not idle capacity. For batch workloads with variable demand, this is exactly right.

## What I use it for

**Central warehouse.** Where all transformed data lives after dbt does its work. The single source of truth for revenue analytics.

**Large historical datasets.** Analysis that would choke a transactional database. Multi-year cohort analysis, pipeline trend analysis, attribution modeling across millions of records.

**Data sharing.** Secure shares with partners without moving data around. Useful for customer analytics partnerships or external reporting.

**Exploration.** Ad-hoc queries on datasets too big for local analysis. When I need to dig into something unexpected, Snowflake handles it without planning.

## Where it falls short

The cost model is opaque until you're deep into it. Credit consumption varies by warehouse size, query complexity, and features you didn't know you were using. I've seen teams get surprised by bills because they didn't understand how clustering or query acceleration worked.

It's not cheap. For smaller datasets or cost-conscious teams, BigQuery or DuckDB might be better fits. And if you need real-time streaming as a core capability, Snowflake isn't the right architecture—it's built for batch workloads.

But if you're doing serious analytics work and want to stop thinking about infrastructure, Snowflake delivers. The tradeoff is cost for simplicity. For most teams, that's the right trade.
