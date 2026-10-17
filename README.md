# Murder Squad

A browser-based 3D skirmish wargame with super-deformed miniatures: two small teams of specialist
operatives fight over objectives on a 30" x 22" board across four turning points, with alternating
single-operative activations, orders, cover, and dice-off shooting and melee. Play against an AI
opponent or hot-seat.

**This is an unofficial, non-commercial fan project** by evilgouki. It is not affiliated with,
endorsed by, or sponsored by Games Workshop or any rights holder. It reimplements gameplay
*mechanics* only: all rules text, flavour text and UI copy in this project are written from scratch
in our own words, and all art, 3D models, audio and code are original. No copyrighted text, artwork
or assets from any commercial game are included.

## Stack
Vite + React + TypeScript (strict), React Three Fiber / Three.js, drei, zustand, Vitest, Playwright,
GitHub Actions to GitHub Pages.

## Running locally
```bash
npm install
npm run dev
```

## Scripts
```bash
npm run build          # production build to dist/ (base path /murder-squad/)
npm run typecheck      # tsc --noEmit
npm test               # unit tests (vitest run)
npm run e2e            # Playwright end-to-end (builds + previews first)
npm run sim            # headless engine simulator
npm run bench:ai       # AI vs random bot benchmark
npm run validate:data  # JSON data validation
```

## Layout
```
src/engine   pure rules engine: (state, action) -> state + events, seeded RNG, action log
src/data     team, weapon, ploy, equipment and mission data (JSON + schemas)
src/ai       AI opponent (same Decider interface as the human UI)
src/client   React + React Three Fiber renderer and UI
tools        sim, bench, validators, asset pipelines
tests        engine/data/ai/client unit tests (Vitest) and e2e (Playwright)
docs         specs, knowledge base, rulings log
```
See `PLAN.md` for scope and decisions and `STATUS.md` for what currently exists.
