# Portfolio

Modern, fast personal portfolio built with Vite, React 19, React Router v7, and Tailwind CSS 4. It showcases projects with a clean UI, subtle motion, and responsive cards.

## Tech Stack

- **Framework**: Vite + React 19 with React Compiler
- **Routing**: React Router v7 (declarative APIs)
- **Styling**: Tailwind CSS 4
- **UI**: shadcn/ui components, lucide-react icons
- **DX**: TypeScript, vite-tsconfig-paths, Biome for lint/format

## Getting Started

### Prerequisites

- Node.js 20+ (LTS recommended)
- A package manager: pnpm (recommended) or npm

### Install dependencies

```bash
pnpm i
# or
npm ci
```

### Run the app

```bash
pnpm dev
# or
npm run dev
```

App runs at http://localhost:5173 by default.

## Scripts

- `dev`: start Vite dev server
- `build`: type-check and build production assets
- `preview`: preview the production build locally
- `lint`: check with Biome
- `lint:fix`: auto-fix with Biome
- `format`: format with Biome

```bash
pnpm build && pnpm preview
# or
npm run build && npm run preview
```

## Project Structure

- `src/features/projects/` – project list and cards
- `src/data/projects.ts` – project data source and `Project` type
- `public/` – static assets (project images, favicons, etc.)

## Projects Data

Projects are defined in `src/data/projects.ts`:

```ts
export type Project = {
  title: string;
  description: string;
  image: string; // path from /public or a full URL
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
};
```

Images are served from `public/`. Prefer a 16:9 image for best fit with the card header’s `aspect-video`. Use large, optimized images and let the UI downscale.

## Linting & Formatting

This repo uses **Biome** for linting and formatting.

```bash
pnpm lint
pnpm lint:fix
pnpm format
# or
npm run lint
npm run lint:fix
npm run format
```

## Build

```bash
pnpm build
# or
npm run build
```

Outputs to `dist/`.

## Deployment (GitHub Pages)

This repo includes a workflow at `.github/workflows/pages.yml` that builds the site and deploys `dist/` to GitHub Pages on pushes to `main`.

Notes:

- For a repository (project) page at `https://<user>.github.io/<repo>/`, set a base path in `vite.config.ts`:

```ts
export default defineConfig({
  base: '/<repo>/',
  // ...
})
```

- Ensure your package manager in the workflow matches your local usage. The current workflow uses `npm ci && npm run build`. If you prefer pnpm, switch steps accordingly.

Once enabled in the repo settings (Pages: GitHub Actions), deployments will appear automatically after pushing to `main`.

## Acknowledgements

- Vite, React, React Router
- Tailwind CSS, shadcn/ui, lucide-react
- Biome

