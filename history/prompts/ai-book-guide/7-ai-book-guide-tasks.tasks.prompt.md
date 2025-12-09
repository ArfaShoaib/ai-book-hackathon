---
id: 7
title: AI Book Guide Tasks
stage: tasks
date: 2025-12-08
surface: agent
model: claude-sonnet-4-5-20250929
feature: ai-book-guide
branch: 002-ai-book-guide
user: user
command: /sp.tasks
labels: [tasks,ai-book,docusaurus]
links:
  spec: specs/002-ai-book-guide/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/002-ai-book-guide/tasks.md
tests:
  - none
---

## Prompt

# 📌 SPECIFICATION — AI Book (Docusaurus)

## 1. Book Title
"AI Engineering for Beginners — A Practical Guide"

## 2. Sections
1. Introduction to AI
2. Understanding LLMs
3. Prompt Engineering
4. Spec-Driven Development
5. Building AI Projects
6. Deploying AI Apps
7. Docusaurus + AI Book Writing Workflow

## 3. Tools Required
- Node.js
- Yarn or npm
- Docusaurus
- Spec-Kit Plus
- Claude Code
- GitHub
- GitHub Pages

## 4. User Flow
1. Clone repo
2. Run `npx create-docusaurus@latest`
3. Add book chapters
4. Build & deploy
5. Publish to GitHub Pages

## 5. Constraints
- Must work on GitHub Pages
- Must be readable on mobile
- Must be fully AI-written
- Markdown only

## Response snapshot

Generated comprehensive task list for the "AI Engineering for Beginners — A Practical Guide" project, organized by user stories in priority order. Tasks include setup (T001-T003), foundational infrastructure (T004-T009), and implementation of four user stories: basic book structure/navigation (T010-T017), complete book content (T018-T028), mobile-responsive reading experience (T029-T033), and AI-assisted content creation (T034-T038), plus polish tasks (T039-T044).

## Outcome

- ✅ Impact: Created detailed task breakdown with 44 specific tasks organized by user story priority
- 🧪 Tests: none
- 📁 Files: Created specs/002-ai-book-guide/tasks.md with structured task list
- 🔁 Next prompts: Begin implementation of tasks starting with setup phase
- 🧠 Reflection: Tasks are well-organized by user story priority with clear dependencies and parallel execution opportunities identified.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin implementation of setup tasks (T001-T003)