# Portfolio Website – Charles Trangay

Modern, responsive developer portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. It showcases featured projects, a concise bio, and contact links with an accessible, polished UI.

- Live preview: local dev at http://localhost:3000 (deployment link: http://charlestrangay.com)

## Features

- **Responsive UI** with Tailwind CSS and shadcn/ui components
- **Projects grid** with equal-height cards and optimized images via `next/image`
- **Reusable components** like `SocialIconButton` for consistent social actions
- **Accessible semantics** with labeled links and section headings
- **TypeScript** across components for maintainability

## Tech Stack

- **Framework**: Next.js (App Router), React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: lucide-react
- **Images**: Next.js Image Optimization (`next/image`)
- **Tooling**: ESLint, Prettier

## Project Structure

```bash
/ (repo root)
├─ src/
│  ├─ app/
│  │  ├─ globals.css         # Tailwind and global styles
│  │  └─ page.tsx            # Home page composition
│  └─ components/
│     ├─ HeroSection.tsx
│     ├─ ProjectsSection.tsx
│     ├─ ContactSection.tsx
│     ├─ SocialIconButton.tsx
│     └─ ui/                 # shadcn/ui primitives
├─ public/                    # Static assets (optional images, icons)
├─ next.config.ts             # Next.js configuration (images, etc.)
└─ README.md
```

## Getting Started

Prerequisites: Node.js 18+, Yarn.

```bash
yarn install
yarn dev
```

Open http://localhost:3000 in your browser.

### Available Scripts

```bash
yarn dev       # Start dev server
yarn build     # Create production build
yarn start     # Start production server
yarn lint      # Lint the codebase
```

## Configuration

### Image Domains
External images are used for project thumbnails. Next.js Image requires allowlisting domains in `next.config.ts`.

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
```

Alternatively, place images in `public/` and reference them with relative paths (no domain config needed).

## Editing Content

- **Projects**: Update the array in `src/components/ProjectsSection.tsx`.
  - Fields: `title`, `description`, `image`, `technologies: string[]`, `githubUrl`, optional `liveUrl`.
- **Social links**: Update URLs in `HeroSection.tsx` and `ContactSection.tsx` (via `SocialIconButton`).

## Deployment

The project is optimized for deployment on Vercel.

```bash
yarn build
# then push to the connected Vercel project or run `vercel` if using the CLI
```

## License

This repository is licensed under the MIT License.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

