# Project GHOST — Echoes of the Past

A Hacktoberfest 2026 Week 4 local-first prototype: preserve written stories and explore them with an open-weight model through Ollama.

## Requirements
- Node.js 20.9+ (Node.js 22 LTS recommended)
- Ollama installed and running locally

## Setup
```bash
npm install
cp .env.example .env.local
ollama pull gemma3:1b
npm run dev
```
Open http://localhost:3000. If Ollama is not running, start it with `ollama serve` (on systems where the Ollama app has not already started it).

## Demo
1. Select **Load fictional demo**.
2. Ask: **What color was the lantern?**
3. Ask: **What was Mara's favorite song?** The Echo should say the story doesn't specify.
4. Add your own *non-sensitive* test story, refresh, and verify browser-local persistence.

## Privacy and limitations
- Stories persist in the browser's IndexedDB and are transmitted to the Next.js server route only when asking the Echo; that route calls Ollama on the same machine.
- Do not deploy this server route publicly without authentication, abuse protection, and a redesigned trust boundary. This is a **local demo**, not a production multi-user service.
- No encryption-at-rest guarantee; other users of the same browser profile may access stored stories.
- A model can hallucinate despite grounding instructions. Review outputs.
- Deleting stored memories is not yet implemented; use browser site-data controls for the prototype.
- AI and model license terms must be verified before distribution or prize category claims.

## Validation (to be performed in the user's environment)
```bash
npm run typecheck
npm run lint
npm run build
```

## Hacktoberfest submission checklist
- [ ] Confirm official rules, cutoff, model eligibility, and category details.
- [ ] Verify real Ollama responses and IndexedDB persistence.
- [ ] Record a working demo.
- [ ] Review repository for secrets and private content, then publish.
- [ ] Publish the DEV challenge post with code and demo links.
