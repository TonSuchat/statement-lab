# Statement Lab

A private, static, mobile-first course for learning to read global financial reports.

## Run locally

```sh
corepack pnpm install
corepack pnpm dev
```

Build the deployable static site with:

```sh
corepack pnpm build
```

The output is `dist/`.

## Update a lesson

Lessons live in `src/content/lessons/`. Each MDX file has a title, learning metadata, source links, and a `reviewed` date. Edit the lesson, update the source trail and date, then run the build.

## Deploy to Cloudflare Pages

1. Push this folder to a Git repository.
2. In Cloudflare Pages, connect the repository.
3. Set build command to `corepack pnpm build`.
4. Set output directory to `dist`.

Progress and Company Notebook data are saved in the browser only. Use the Notebook export button for a backup before clearing browser data or changing devices.

## Scope

This is an educational tool, not investment advice. It links to primary sources rather than hosting complete company reports.
