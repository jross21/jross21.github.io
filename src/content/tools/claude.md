---
title: "Claude & Claude Code"
description: "The AI assistant I actually use for building, not just chatting."
category: "ai"
verdict: "The first AI tool where I trust the output enough to ship it without rewriting everything."
use_when: "You need a coding partner that understands context, can work with your actual codebase, and doesn't hallucinate APIs that don't exist."
skip_when: "You need deterministic outputs or are working in a domain with very little public training data."
---

I've used most of the AI coding tools at this point. GitHub Copilot, ChatGPT, various IDE integrations. Claude is the first one where the output quality is high enough that I've fundamentally changed how I work.

The difference is context handling. Claude Code can work with your actual repository—understanding file structure, reading existing code, making changes across multiple files. It's not just autocomplete with delusions of grandeur. It's closer to pair programming with someone who's read your codebase.

## What I use it for

- **Agentic workflows**: Building multi-step automations where Claude handles the orchestration logic
- **Code exploration**: Understanding unfamiliar codebases faster than reading documentation
- **Refactoring**: Explaining what I want changed in plain English, reviewing the proposed changes
- **Writing first drafts**: Technical documentation, config files, boilerplate—anything where I know what I want but don't want to type it

## What I wish it did better

The context window is generous but not infinite. On large projects, you have to be intentional about what context you're providing. And like all LLMs, it can be confidently wrong about obscure libraries or recent changes. I verify anything that touches external APIs or dependencies.

But the velocity improvement is real. Tasks that used to take an afternoon now take an hour. And the quality of the output—particularly for code that needs to integrate with existing patterns—is genuinely impressive.
