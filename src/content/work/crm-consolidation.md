---
title: "Consolidating 3 CRMs into One Unified System"
description: "Merged acquired company systems into a single Salesforce instance without losing data or disrupting sales."
featured: false
---

## Context

Post-acquisition, the company was running three separate CRM systems: Salesforce (parent company), HubSpot (acquisition #1), and Pipedrive (acquisition #2). Each had different data models, different processes, and different definitions of basic concepts like "opportunity stage." Sales reps were logging into multiple systems. Reporting was nearly impossible.

## Approach

Consolidated everything into a single Salesforce instance. The goal wasn't just data migration—it was process unification.

### Phase 1: Discovery

Mapped each system's data model and processes:

```
HubSpot fields → Salesforce equivalent
Pipedrive fields → Salesforce equivalent
Custom processes → Unified process design
```

Found over 200 unique fields across systems. 60% were duplicates with different names. 20% were unused. Only 20% were genuinely unique data.

### Phase 2: Design

Built a unified Salesforce org that could support all three business units:

- Record types for different sales motions
- Shared opportunity stages with unit-specific fields
- Unified account model with parent-child relationships
- Common lead routing with team-specific rules

### Phase 3: Migration

Moved data in waves to reduce risk:

- Wave 1: Accounts and contacts (low risk, foundational)
- Wave 2: Open opportunities (medium risk, needed for sales)
- Wave 3: Historical data (low priority, batch processing)

## Implementation Details

The critical decision: one migration script per source system, run incrementally. This allowed us to fix issues without re-running the entire migration.

Biggest challenge was opportunity stage mapping. Each system had different stages with different meanings. Built a translation table with stakeholder sign-off before any data moved.

## Results

- 3 CRMs → 1 unified Salesforce instance
- Single customer view across all acquired companies
- Reporting time reduced from days to hours
- Cross-sell opportunities became visible for the first time

## Reflection

CRM consolidation is 20% technical, 80% political. The technology is straightforward—ETL, field mapping, validation. The hard part is getting three different sales teams to agree on common definitions and processes. The migration was the easy part. Change management was the actual project.
