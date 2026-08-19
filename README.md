# Vicky Jadhav - Portfolio

A responsive, single-page developer portfolio built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**. Content (experience, skills, certifications) is data-driven from [`src/data/resume.ts`](src/data/resume.ts), so updating the site is just editing that one file.

## Features

- Fully responsive layout (mobile → desktop) with a collapsible mobile nav
- Light/dark theme toggle with `localStorage` persistence and no flash-of-wrong-theme on load
- Sections: Hero, About, Skills, Experience timeline, Certifications & Education, Contact
- Zero backend - static build, deployable anywhere
- GitHub Actions workflow that builds and deploys to **GitHub Pages** on every push to `main`

## Getting started

Requires **Node.js 20+** (matches the version used by the GitHub Actions deploy workflow).

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deploying to GitHub Pages

This repo ships with [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the app and publishes `dist/` via the official `actions/deploy-pages` action whenever you push to `main`.

**One-time setup on GitHub:**

1. Push this repo to GitHub (see below).
2. In the repo, go to **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab). The site will be published at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

`vite.config.ts` uses a relative `base: './'`, so the build works out of the box under any repository name or subpath - no config changes needed regardless of what you name the repo.

### Pushing this project to GitHub

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

### Manual deploy (alternative)

You can also deploy manually via the `gh-pages` branch without Actions:

```bash
npm run deploy
```

This runs `npm run build` and pushes `dist/` to a `gh-pages` branch using the `gh-pages` package. If you use this method instead of Actions, set **Settings → Pages → Source** to **Deploy from a branch → `gh-pages`**.

## Updating content

All resume content lives in [`src/data/resume.ts`](src/data/resume.ts) - profile info, stats, skill groups, work experience, certifications, and education. Edit that file and the whole site updates.

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
