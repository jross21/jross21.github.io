---
title: "Why Most Salesforce Implementations Fail"
description: "The problem isn't the tool. It's the approach. Here's what actually works."
category: "RevOps Craft"
---

I've seen dozens of Salesforce implementations. Most struggle. Here's why—and what to do differently.

## The Usual Story

Company buys Salesforce. Spends months configuring fields, workflows, and integrations. Launches with fanfare. Six months later, reps hate it, data is a mess, and leadership can't trust the reports.

Sound familiar?

## The Root Problem

The implementation focused on *features* instead of *behavior*.

Every field, workflow, and automation was designed in a vacuum, without considering:
- How reps actually work
- What data you really need for decisions
- How to enforce quality without creating friction

## What Actually Works

### 1. Start with the Decisions

Before configuring anything, ask: "What decisions does this system need to support?"

Work backwards from there. If a field doesn't inform a decision, question whether you need it.

### 2. Design for the Minimum

Every required field is friction. Every validation rule is a potential support ticket. Start with the absolute minimum and add complexity only when you've proven you need it.

```
Bad: 47 fields on the opportunity object, 23 required
Good: 12 fields that actually get used, 5 required
```

### 3. Governance Over Configuration

The best Salesforce implementation I've seen had a simple principle: no field gets added without a defined owner and a clear business purpose.

This prevented the drift that kills most CRMs—where fields accumulate like barnacles until no one knows what anything means.

### 4. Automate Hygiene, Not Just Workflow

Don't just automate happy-path workflows. Automate data quality:
- Duplicate detection
- Required field enforcement
- Stage validation
- Exception reporting

The unsexy work is what makes the system trustworthy.

## The Uncomfortable Truth

Salesforce implementations fail because they're treated as IT projects instead of behavioral change projects.

The tool is almost irrelevant. What matters is: Do your people use it consistently? Is the data reliable? Can you trust the reports?

Those are people problems, not software problems. Solve them first.
