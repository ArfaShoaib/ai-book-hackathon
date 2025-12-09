<!-- SYNC IMPACT REPORT
Version change: 0.1.0 → 1.0.0
Modified principles: None (new constitution)
Added sections: All principles and sections
Removed sections: None
Templates requiring updates: N/A
Follow-up TODOs: None
-->
# AI Book Constitution

## Core Principles

### I. Docusaurus-First Documentation
Every chapter and section starts as a Markdown document within the Docusaurus framework; Documentation must be self-contained, well-structured, and maintainable; Clear purpose required - no orphaned or disconnected content.

### II. AI-Assisted Writing
All content is generated with AI assistance through Spec-Kit Plus and Claude Code; Specifications must be created before content generation; Human oversight required for quality assurance and fact-checking.

### III. Spec-Driven Development (NON-NEGOTIABLE)
Specifications written → Approved → Content gaps identified → Then implement; Spec-first approach ensures comprehensive coverage and consistent quality across all chapters.

### IV. Build-and-Deploy Validation
Focus areas requiring validation: All documentation builds successfully, Navigation sidebar renders correctly, Cross-references work properly, GitHub Pages deployment functions.

### V. Simplicity and Clarity
Content must be accessible to target audience; Complex topics broken into digestible sections; Clear examples and practical applications; No unnecessary complexity or jargon without explanation.

### VI. GitHub-Centric Workflow
All development occurs through GitHub; Pull requests required for all changes; Proper branching and review process maintained; Documentation deployed via GitHub Actions to GitHub Pages.

## Architecture Requirements
- Frontend: Docusaurus-based static site
- Content: Markdown files in /docs directory
- Navigation: Automatic sidebar generation
- Deployment: GitHub Pages
- AI Tools: Spec-Kit Plus, Claude Code integration

## Development Workflow
- Chapter specifications created before writing
- Content reviewed for accuracy and clarity
- All changes tested locally before deployment
- Regular synchronization with GitHub repository
- Deployment verified on GitHub Pages

## Governance
This constitution governs all aspects of the AI Book project development; All contributions must comply with these principles; Amendments require documentation and approval; Version control through Git with proper tagging.

**Version**: 1.0.0 | **Ratified**: 2025-12-08 | **Last Amended**: 2025-12-08
