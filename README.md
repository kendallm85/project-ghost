# Project GHOST — Echoes of the Past

A Halloween-themed, local-first memory investigation and storytelling prototype created for Hacktoberfest 2026 Week 4, “Ghost in the Machine.”

Project GHOST combines browser-local memories, an animated Echo interface, a fictional Blackwood Manor mystery, and optional real local AI inference using Ollama and Gemma 3 1B. It is an experimental demo, not a production service.

## Features

- **Blackwood Manor investigation:** load three fictional witness accounts (Sarah, Marcus, Emily) and investigate the events of October 31, 1998.
- **Investigate mode:** ask evidence-first questions, distinguish observations from speculation, and preserve unknowns.
- **Tell the Story mode:** combine fixed witness facts with clearly labeled AI-generated fictional atmosphere; never treat embellishments as evidence.
- **Browser-local memories:** save and revisit stories in IndexedDB.
- **Scripted fictional demo:** explore the experience without running a local model. Scripted responses are not AI.
- **Local Gemma 3 inference:** run the app on your own computer with Ollama. Hosted previews intentionally disable the AI endpoint.
- **Animated Echo:** a Halloween-themed spectral interface with reduced-motion support.

## Requirements

- Node.js 20.9+ (Node.js 22 recommended)
- npm
- Optional for real AI: Ollama and the `gemma3:1b` model

## Run locally

```bash
git clone https://github.com/kendallm85/project-ghost.git
cd project-ghost
npm install
cp .env.example .env.local
ollama pull gemma3:1b
npm run dev
```

Open http://localhost:3000. Start Ollama using your system's service manager or `ollama serve` if it is not already running. For scripted-only testing, Ollama is not required.

The default local environment variables are:

```dotenv
OLLAMA_BASE_URL=http://127.0.0.1:11434
OLLAMA_MODEL=gemma3:1b
```

Do not commit `.env.local`. The API only accepts loopback Ollama addresses.

## Try the Halloween mystery

1. Load the **Halloween Mystery** to add three fictional Blackwood Manor witness accounts.
2. Turn **scripted demo** off and ensure Ollama is running to use actual local AI.
3. Select **Investigate** and ask: “Does the evidence prove the woman was a ghost?”
4. Select **Tell the Story** for a fictional retelling that separates recorded observations from invented atmosphere.
5. Test browser-local persistence by refreshing after saving a non-sensitive memory.

A separate original lantern scripted demonstration is available for testing without AI. Do not present scripted output as model inference.

## How the AI works

The Next.js `/api/chat` route calls a local Ollama server when run on your own computer. The Blackwood Manor records are fictional test data. The investigation mode asks Gemma to ground its response in supplied records. The storytelling mode distinguishes fixed witness facts from AI-generated embellishment.

**Performance note:** local inference on low-memory, CPU-only devices can be very slow or incomplete. A completed response on one computer does not guarantee the same speed elsewhere. Storytelling may return a fallback when AI atmosphere cannot be generated within the configured budget.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```

GitHub Actions also runs these checks. A lint warning does not necessarily fail CI.

## Privacy and limitations

- Memories are saved in the current browser's IndexedDB. They are not encrypted at rest.
- When asking real AI questions, supplied memories are sent to the locally running Next.js API route, which calls Ollama on the same computer.
- **Hosted previews do not run AI inference**. Their scripted responses are demonstrations, not live Gemma output.
- This prototype does not provide multi-user authentication, rate limiting, secure hosting of the AI route, or in-app deletion of memories. Use browser site-data controls to remove stored demo data.
- Do not enter sensitive personal data. Do not expose the local AI API to the public internet.
- Generative models can hallucinate or truncate responses. Fictional witness records do not establish supernatural facts.

## Open-source licensing

Application source code is licensed under the [MIT License](LICENSE). The separately obtained Gemma 3 model is **not** relicensed by this repository and remains subject to its own model license and terms. Third-party dependencies retain their respective licenses.

## Hacktoberfest submission readiness

- [x] Implement fictional Blackwood Manor case and dual experience modes.
- [x] Verify real local Ollama/Gemma investigation output.
- [x] Verify a hybrid fictional retelling, including labeled embellishment.
- [x] Run automated typecheck, lint and build in GitHub Actions.
- [ ] Review repository history and source for secrets before publishing.
- [ ] Capture a short demo showing scripted and real local AI paths accurately.
- [ ] Confirm official challenge requirements, deadline and model eligibility.
- [ ] Publish the repository and submit the DEV challenge post.

The application is deliberately kept private until its owner approves publication.
