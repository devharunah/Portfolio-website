# Kakooza Harunah, portfolio

My portfolio site. An engineering-sheet layout in black and white, case studies at
`/work/[slug]`, a project archive, and content managed in Sanity.

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Sanity Studio
(embedded at `/studio`), Cabinet Grotesk and Satoshi (Fontshare, self-hosted).

## Run it

```bash
npm install
cp .env.example .env.local
npm run dev
```

The site works without Sanity: until `NEXT_PUBLIC_SANITY_PROJECT_ID` is set it renders the
fallback content in `src/content/site.ts`.

## Connect Sanity (one time)

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage) (or run
   `npx sanity@latest init` and skip creating files). Keep the `production` dataset.
2. Put its project ID in `.env.local` as `NEXT_PUBLIC_SANITY_PROJECT_ID`.
3. In the project's **API** settings:
   - **CORS origins:** add `http://localhost:3000` and your production URL, with credentials allowed,
     so the embedded Studio can sign in.
   - **Tokens:** create an *Editor* token and put it in `.env.local` as `SANITY_API_WRITE_TOKEN`.
4. `npm run seed` copies `src/content/site.ts` (profile, projects, experience, talks and images)
   into Sanity. It never overwrites existing documents unless you pass `-- --force`.
5. Open `http://localhost:3000/studio` and edit from there. You can delete the write token after seeding.

### Publishing updates instantly

Pages are static and refresh hourly on their own. For instant updates, add a webhook in
sanity.io/manage → API → Webhooks:

- URL: `https://<your-domain>/api/revalidate`
- Trigger on: create, update, delete. Filter: `_type in ["profile","project","experience","talk"]`
- Projection: `{_type}`
- Secret: a long random string, also set as `SANITY_REVALIDATE_SECRET` in Vercel.

On Vercel, set `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`,
`NEXT_PUBLIC_SITE_URL` and `SANITY_REVALIDATE_SECRET`.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server on :3000 |
| `npm run build` | Production build |
| `npm run lint` / `npm run typecheck` | ESLint / `tsc --noEmit` |
| `npm run seed` | Seed Sanity from `src/content/site.ts` |
| `npm run typegen` | Extract the Sanity schema and generate query types |

## Design

`DESIGN.md` is the design system (tokens, type, layout, motion, copy rules). Claude Code loads it
through the `portfolio-design` skill in `.claude/skills/`. See `CLAUDE.md` for the code layout.
