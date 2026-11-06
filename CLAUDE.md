# Kakooza Harunah portfolio

Personal portfolio site. Next.js 16 (App Router, Turbopack), React 19, TypeScript strict,
Tailwind CSS v4, Sanity (Studio embedded at `/studio`), deployed on Vercel.

> Next.js 16 differs from older tutorials. Check `node_modules/next/dist/docs/` before using an
> API you're unsure of (for example `revalidateTag` now takes a second `profile` argument).

## Design

All UI work follows `DESIGN.md`. Load the `portfolio-design` skill before building or restyling
anything visual or writing visitor-facing copy.

## Layout of the code

| Path | What |
|---|---|
| `src/app/(site)/` | The public site: home (`page.tsx`), `/work/[slug]`, `/archive`, `/contact` |
| `src/app/studio/[[...tool]]/` | Embedded Sanity Studio, outside the site chrome |
| `src/app/api/revalidate/` | Sanity webhook → `revalidateTag` |
| `src/sanity/` | Client, env, image builder, GROQ queries, schema types, Studio structure |
| `src/lib/content.ts` | The only way components get content. Reads Sanity, or falls back to `src/content/site.ts` when Sanity isn't configured |
| `scripts/seed.ts` | Writes `src/content/site.ts` into Sanity (`npm run seed`). Idempotent |

## Rules

- Content (profile, projects, experience) lives in Sanity. Don't hardcode it in components.
- Server components by default. Client components only for interactive islands.
- Secrets (`SANITY_API_WRITE_TOKEN`, `SANITY_REVALIDATE_SECRET`) are server-only; never prefix
  them with `NEXT_PUBLIC_`.
- After changing a schema, run `npm run typegen`.
- Before calling work done: `npm run lint`, `npm run typecheck`, `npm run build`.

## Commits

Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`). Branch off
`master`; don't commit to it directly.
