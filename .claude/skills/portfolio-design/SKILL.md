---
name: portfolio-design
description: Design system for Kakooza Harunah's portfolio. Use for ANY visual, layout, copy or UI work in this repo, including new sections, components, restyles, case-study pages, colour, type or motion choices. Enforces DESIGN.md: engineering-sheet layout with hairline ruled grids, monochrome tokens only (no hex in tsx), zero radius, Cabinet Grotesk + Satoshi + Geist Mono labels, slow hover inversions, light default with dark toggle.
---

# Portfolio design

`DESIGN.md` at the repo root is the source of truth. Read it before you build or restyle
anything. This skill says how to apply it in this codebase.

## Where things live

| Need | Use |
|---|---|
| Colour tokens, `.btn`, `.label`, `.hatch` | `src/app/globals.css` (`bg-bg`, `text-fg-muted`, `border-border-strong`...) |
| Fonts | `font-display` (Cabinet Grotesk), `font-sans` (Satoshi), `font-mono` (Geist Mono); files in `src/app/fonts/` |
| Header, footer | `src/components/layout/*` |
| Sections on the home page | `src/components/sections/*` |
| Shared pieces (Section, Strip, CornerTicks, Crosshairs, StackLine, TextLink, Logo, ThemeToggle) | `src/components/ui/*` — reuse, never restyle ad hoc |
| Content and its types | Sanity (`src/sanity/*`), read through `src/lib/content.ts`; fallback content in `src/content/site.ts` |

## Before you design

Answer in one line each: who is this section for, what should they be able to do after reading
it, what is the one detail that makes it ours. If the answer to the last one is "a gradient" or
"an animation", start again.

## Rules that get broken most

1. A hex value or `text-gray-*` in a `.tsx` file. Add a token instead.
2. Any colour hue, rounded corners, shadows, or a background hover wash on content.
3. Hover styles in JS (`onMouseEnter` setting `style`). Use CSS `hover:` and `focus-visible:`
   so keyboard users get the same thing.
4. `"use client"` on a whole page. Keep pages as server components; isolate the interactive
   piece (`ThemeToggle`, `CopyEmail`, `ContactForm`) as a client island.
5. Fade-up-on-scroll for every block. The page should be readable with zero JS animation.
6. Content hardcoded in a component. Projects, experience and profile come from Sanity.
7. Em dashes and filler words in copy (see DESIGN.md "Copy").

## Motion

CSS transitions only: colour inversion and underlines at 400-500ms, card image zoom over 700ms.
No animation library is installed; don't add one for decoration.

## Done means

Run the DESIGN.md pre-ship checklist, then look at the page at 375px and 1440px, and tab through it with the keyboard.
