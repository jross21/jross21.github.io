---
title: "Snowflake"
description: "The data warehouse that actually scales without making you think about infrastructure."
category: "data"
verdict: "Expensive, but the engineering time you save on infrastructure usually justifies it."
use_when: "You need to query large datasets without managing infrastructure, or your data team shouldn't be doing DevOps."
skip_when: "Your data fits in Postgres, you're extremely cost-sensitive, or you need real-time streaming as a core use case."
---

Snowflake solved the right problem: letting data teams focus on data instead of infrastructure. Separation of storage and compute means you can scale queries without over-provisioning. The SQL is standard enough that your existing skills transfer. And the ecosystem—connectors, integrations, partners—is mature.

The compute model is the key insight. Spin up a warehouse, run your queries, shut it down. You're paying for actual work, not idle capacity. For batch workloads with variable demand, this is exactly right.

## What I use it for

- **Central data warehouse**: Where all the transformed data lives after dbt does its work
- **Revenue analytics**: Large historical datasets that would choke a transactional database
- **Data sharing**: Secure shares with partners without moving data around
- **Exploration**: Ad-hoc queries on datasets too big for local analysis

## What I wish it did better

The cost model is opaque until you're deep into it. Credit consumption varies by warehouse size, query complexity, and features you didn't know you were using. I've seen teams get surprised by bills because they didn't understand how clustering or query acceleration worked.

And it's not cheap. For smaller datasets or cost-conscious teams, BigQuery or even DuckDB might be better fits. But if you're doing serious analytics work and want to stop thinking about infrastructure, Snowflake delivers.
