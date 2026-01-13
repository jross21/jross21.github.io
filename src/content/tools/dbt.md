---
title: "dbt"
description: "The transformation layer that made analytics engineering a real discipline."
category: "data"
verdict: "If you're writing SQL transforms without dbt, you're making your life harder than it needs to be."
use_when: "You have more than a handful of SQL transforms, need version control for your data logic, or want to stop debugging spaghetti SQL."
skip_when: "You're doing simple one-off queries or your entire data stack is a single spreadsheet."
---

dbt changed how I think about data work. Before dbt, SQL transformations lived in scheduled scripts, stored procedures, or worse—someone's laptop. No version control, no lineage, no tests. Just vibes and hope.

The core insight is treating SQL like software: modular, testable, documented. You write SELECT statements, dbt handles the DDL. You define dependencies, dbt builds the DAG. You add tests, dbt runs them before anything hits production.

## What I use it for

- **Revenue data models**: Pipeline stages, conversion rates, cohort analysis—all defined as versioned, tested models
- **Semantic layer**: Business logic in one place, not scattered across dashboards
- **Data contracts**: Schema tests that fail before bad data propagates downstream

## What I wish it did better

The Python models feel bolted on. For complex transformations that genuinely need Python, I'd rather use a proper orchestrator. And dbt Cloud's pricing assumes you're a well-funded startup with a dedicated data team—the free tier is limiting for solo practitioners.

But for SQL transformation work, nothing else comes close. The combination of version control, testing, documentation, and lineage tracking is exactly what data work needed. It turned "data engineering" from an ops problem into a software engineering discipline.
