---
title: "Building an Agentic Workflow for RevOps"
description: "Designed a constraint-based AI system that plans, executes, and self-checks revenue operations tasks."
featured: true
---

## Context

Manual processes were consuming significant RevOps bandwidth: lead routing, data enrichment, meeting scheduling, CRM updates. The team needed automation that could handle edge cases intelligently, not just follow rigid rules.

## Approach

Traditional automation tools (Zapier, Make) work well for simple if-then logic, but break down when decisions require context. Built an agentic workflow that:

1. **Plans** — Analyzes the task and creates an execution plan
2. **Executes** — Takes actions within defined constraints
3. **Self-checks** — Validates results and catches errors before they propagate

## System Design

The system operates within strict guardrails:

- **Constraint-based execution** — AI can only take actions within predefined boundaries
- **Human-in-the-loop** — High-stakes decisions route to humans for approval
- **Audit trail** — Every action is logged with reasoning

```python
# Simplified constraint definition
constraints = {
    "can_update_fields": ["lead_status", "lead_score", "enrichment_data"],
    "cannot_update_fields": ["owner_id", "amount", "close_date"],
    "requires_approval": ["merge_duplicates", "delete_record"],
    "max_actions_per_run": 50
}
```

## Implementation

- Custom orchestration layer on top of Claude API
- Salesforce integration via REST API
- Slack notifications for human-in-the-loop approvals
- Comprehensive logging to Snowflake

## Results

- 80% reduction in manual lead routing time
- Data enrichment accuracy: 94% (vs. 78% with rules-based approach)
- Zero critical errors in first 6 months (constraint system worked)
- RevOps team freed up 15+ hours/week for strategic work

## Reflection

The key insight: AI works best when you define what it *can't* do, not just what it *should* do. Constraints aren't limitations—they're what make the system trustworthy. The human-in-the-loop pattern is essential for high-stakes actions; the goal isn't to remove humans, but to focus human attention where it matters most.
