---
title: "Claude & Claude Code"
description: "The AI assistant I actually use—for building, not just chatting."
category: "ai"
verdict: "The first AI tool where I trust the output enough to ship without rewriting everything."
use_when: "You need a coding partner that understands context, works with your actual codebase, and doesn't hallucinate APIs."
skip_when: "You need deterministic outputs or you're working in a domain with minimal public training data."
---

I've used most AI coding tools at this point. Copilot, ChatGPT, various IDE plugins. Claude is the first where output quality is high enough that I've changed how I work.

The difference is context handling. Claude Code operates on your actual repository—understanding file structure, reading existing code, making changes across multiple files. This isn't autocomplete with delusions of grandeur. It's closer to pair programming with someone who's read your codebase.

## What I use it for

**Agentic workflows.** Building multi-step automations where Claude handles orchestration logic. It's good at reasoning through dependencies and edge cases.

**Code exploration.** Understanding unfamiliar codebases faster than documentation allows. "How does authentication work in this project?" gets a useful answer in seconds.

**Refactoring.** Describing what I want changed in plain English, reviewing proposed changes. The quality of structural suggestions is often better than what I'd draft manually.

**First drafts.** Technical documentation, config files, boilerplate—anything where I know what I want but don't want to type it. Claude drafts, I edit.

## Where it falls short

The context window is generous but not infinite. Large projects require intentionality about what context you provide. And like all LLMs, it can be confidently wrong about obscure libraries or recent API changes. I verify anything touching external dependencies.

But the velocity improvement is real. Tasks that took an afternoon now take an hour. The quality—particularly for code that needs to integrate with existing patterns—is genuinely impressive.

The trust threshold matters. This is the first AI tool where I'll ship its output after a review pass, rather than using it as a starting point I rewrite entirely.
