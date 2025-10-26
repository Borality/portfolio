<div align="center">

# Borality Portfolio

Personal portfolio built with React Router v7 and Vite. Deployed to GitHub Pages.

</div>

## Tech Stack

- React 19 + TypeScript
- Vite 7
- React Router v7 (SPA mode)
- Tailwind CSS 4
- Biome (format, lint, organize imports)
- pnpm

## Features

- Fast SPA with client-side routing
- Modern styling with Tailwind
- Strict code quality via Biome (format, lint, organize imports)
- CI/CD to GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+

### Install

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

App runs at http://localhost:5173

### Type Checking

```bash
pnpm typecheck
```

### Code Quality (Biome)

```bash
pnpm format   # biome format --write
pnpm fix      # biome check --write (autofix + organize imports)
pnpm lint     # biome lint
pnpm check    # biome check (verify only)
```

## Build

```bash
pnpm build
```

The output is written to `build/`:

```
build/
├── client/   # Static site (deployed to GitHub Pages)
└── server/   # SSR bundle (not used for Pages)
```

## Scripts

- `dev`: React Router dev server
- `build`: React Router build
- `start`: Preview built server with `react-router-serve ./build/server/index.js`
- `typecheck`: `react-router typegen && tsc`
- `format`: `biome format --write`
- `fix`: `biome check --write`
- `lint`: `biome lint`
- `check`: `biome check`

## Deployment (GitHub Pages)

This repository includes a workflow at `.github/workflows/pages.yml` that:

- Runs Biome format/fix/lint and TypeScript checks on PRs and pushes
- Builds the site with a `BASE_PATH` of `/<repo>/` for Project Pages
- Publishes `build/client` to GitHub Pages, adding `404.html` and `.nojekyll`

After merging to `main`, the site will be available at:

```
https://<username>.github.io/<repo>/
```

For this repo:

```
https://borality.github.io/portfolio/
```

### Local build with a custom base path (optional)

If you need to emulate the Pages base path locally:

```bash
BASE_PATH=/portfolio/ pnpm build
```

## Project Structure (top-level)

```
app/               # Routes, features, components
public/            # Static assets
react-router.config.ts
vite.config.ts
biome.json
```

## Troubleshooting

- 404 on reload or deep links: ensure `404.html` is present (workflow generates it).
- Broken assets on GitHub Pages: confirm the `BASE_PATH` matches `/<repo>/`.
- Lint warnings from generated types in `.react-router/`: these are typegen files; non-blocking unless configured as errors.
