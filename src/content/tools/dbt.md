---
title: "dbt"
description: "The transformation layer that made analytics engineering a real discipline."
category: "data"
verdict: "If you're writing SQL transforms without dbt, you're making life harder than it needs to be."
use_when: "You have more than a handful of transforms, need version control for data logic, or want to stop debugging spaghetti SQL."
skip_when: "You're running one-off queries or your entire data stack is a spreadsheet."
---

dbt changed how I think about data work.

Before dbt, SQL transformations lived in scheduled scripts, stored procedures, or worse—someone's laptop. No version control. No lineage. No tests. Just vibes and hope that nothing broke overnight.

The core insight is treating SQL like software: modular, testable, documented. You write SELECT statements; dbt handles the DDL. You define dependencies; dbt builds the DAG. You add tests; dbt runs them before anything hits production.

## What I use it for

**Revenue data models.** Pipeline stages, conversion rates, cohort analysis—all defined as versioned, tested models. When definitions change, the change is tracked and reviewed like any code change.

**Semantic layer.** Business logic in one place, not scattered across dashboards. "What's a customer?" has one answer, enforced at the transformation layer.

**Data contracts.** Schema tests that fail before bad data propagates downstream. When upstream sources change unexpectedly, I find out before the dashboard breaks.

## Where it falls short

The Python models feel bolted on. For complex transformations that genuinely need Python, I'd rather use a proper orchestrator than fight dbt's execution model.

Pricing is the other issue. dbt Cloud assumes you're a well-funded startup with a dedicated data team. The free tier is limiting for solo practitioners or small teams. dbt Core is still excellent—you just lose the managed infrastructure.

But for SQL transformation work, nothing else comes close. Version control, testing, documentation, lineage—this is what data engineering needed to become a real discipline instead of an ops problem.
