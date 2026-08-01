# Statement Lab

A private, static, mobile-first course for learning to read global financial reports.

## Run locally

sh
corepack pnpm install
corepack pnpm dev

Build the deployable static site with:

sh
corepack pnpm build

The output is `dist/`.

Authenticate Wrangler once, then deploy from the command line. Wrangler is fetched only for this deploy command, so Cloudflare Pages does not need to install it during the site build:

sh
corepack pnpm exec wrangler login
corepack pnpm deploy

## Update a lesson

Lessons live in `src/content/lessons/`. Each MDX file has a title, learning metadata, source links, and a reviewed date. Edit the lesson, update the source trail and date, then run the build.

## Deploy to Cloudflare Pages

For Git-integrated Pages, push this folder to a Git repository, connect it in Cloudflare Pages, set the framework preset to Astro, the build command to `npm run build`, and the output directory to `dist`. Do not set a separate Wrangler deploy command for Git-integrated Pages.

For direct upload, the deploy command must include the output directory and your actual Pages project name:

sh
pnpm dlx wrangler pages deploy dist --project-name=YOUR_PROJECT_NAME

If Pages still selects the wrong toolchain, add these production environment variables in Settings → Environment variables:

text
NODE_VERSION=22.16.0
PNPM_VERSION=10.11.1

The deploy script is for direct CLI deployment and runs the build first.

Progress and Company Notebook data are saved in the browser only. Use the Notebook export button for a backup before clearing browser data or changing devices.

## Scope

This is an educational tool, not investment advice. It links to primary sources rather than hosting complete company reports.