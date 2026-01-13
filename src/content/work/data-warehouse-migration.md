---
title: "Migrating from Spreadsheets to a Modern Data Stack"
description: "Replaced a fragile spreadsheet ecosystem with a scalable data warehouse and automated pipelines."
featured: true
---

## Context

The revenue team was running on spreadsheets. Not one spreadsheet—dozens. Weekly exports from Salesforce, manual VLOOKUP chains, and a master spreadsheet that only two people understood. Reporting took days. Numbers often didn't match. Executives had stopped trusting the data.

## Approach

Built a modern data stack from the ground up:

1. **Data warehouse** — Snowflake as the single source of truth
2. **Transformation layer** — dbt for all business logic
3. **Ingestion** — Fivetran for automated syncs from Salesforce, HubSpot, Stripe
4. **Visualization** — Looker dashboards connected directly to warehouse

Key architectural decision: all business logic lives in dbt, not in dashboards. This means definitions are consistent everywhere and changes propagate automatically.

```sql
-- Example: ARR calculation defined once, used everywhere
SELECT
    account_id,
    SUM(mrr * 12) as arr,
    DATE_TRUNC('month', created_at) as cohort_month
FROM {{ ref('subscriptions') }}
WHERE status = 'active'
GROUP BY 1, 3
```

## Implementation

Phased rollout to minimize disruption:

- **Week 1-2**: Set up Snowflake and Fivetran connections
- **Week 3-4**: Build core dbt models (accounts, opportunities, ARR)
- **Week 5-6**: Migrate top 5 executive reports to Looker
- **Week 7-8**: Train team, deprecate spreadsheets

The hardest part wasn't technical—it was getting agreement on metric definitions. "Active customer" had three different definitions across teams. Resolving that took more meetings than building the pipeline.

## Results

- Report generation: 2 days → 30 seconds
- Data freshness: weekly manual exports → hourly automated syncs
- Metric accuracy: definitions documented, single source of truth
- Executive trust: rebuilt—numbers started matching each other

## Reflection

Spreadsheets aren't the enemy—they're a symptom. The real problem was undefined processes and tribal knowledge. The data stack forced clarity: what do these terms mean, where does this data come from, who owns it? The technology was straightforward. The organizational alignment was the actual work.
