---
title: "Scaling a Revenue Stack from $1M to $50M ARR"
description: "Built forecasting models, segmentation systems, and governance workflows that scaled with rapid growth."
featured: true
---

## Context

Early-stage SaaS company growing rapidly, struggling with fragmented data across Salesforce, spreadsheets, and tribal knowledge. Leadership needed reliable forecasting for board reporting and capacity planning.

## Approach

Started with a systems audit: mapped every data source, workflow, and decision point in the revenue process. Identified the core problem wasn't tooling—it was the lack of a single source of truth and consistent definitions.

## System Design

Built a three-layer architecture:

1. **Data Foundation** — Unified customer and pipeline data in Salesforce with strict field validation and automated hygiene workflows
2. **Analytics Layer** — dbt models feeding Tableau dashboards with consistent metric definitions
3. **Governance Layer** — Automated stage validation, required fields, and exception reporting

```sql
-- Example: Pipeline stage validation
SELECT
  opportunity_id,
  stage_name,
  CASE
    WHEN stage_name = 'Negotiation' AND close_date IS NULL
    THEN 'Missing close date'
    WHEN stage_name = 'Proposal' AND amount IS NULL
    THEN 'Missing amount'
    ELSE 'Valid'
  END as validation_status
FROM opportunities
WHERE validation_status != 'Valid'
```

## Implementation

Rolled out in phases:
- **Week 1-2**: Data cleanup and field standardization
- **Week 3-4**: Forecasting model implementation
- **Week 5-6**: Dashboard deployment and training
- **Week 7-8**: Governance automation

## Results

- Forecast accuracy improved from ~60% to ~85%
- Board prep time reduced from 2 days to 2 hours
- Sales rep data entry compliance increased to 95%
- Leadership gained real-time visibility into pipeline health

## Reflection

The biggest lesson: governance is more important than tooling. The best dashboards mean nothing if the underlying data is inconsistent. Starting with clear definitions and automated validation before building anything visual saved months of rework later.
