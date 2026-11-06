---
name: Kakooza Harunah portfolio
version: 2
tokens:
  color:
    light:                  # default
      bg: "#f5f5f4"         # paper
      surface: "#e9e9e7"
      fg: "#0a0a0a"         # ink, 18.2:1 on bg, 16.3:1 on surface
      fg-muted: "#3d3d3d"   # body, 10.0:1 on bg, 8.9:1 on surface
      fg-subtle: "#5c5c5c"  # labels, 6.1:1 on bg, 5.5:1 on surface
      border: "ink at 18%"
      border-strong: "ink at 45%"
      hatch: "ink at 7%"
    dark:                   # opt-in via the header toggle
      bg: "#0a0a0a"
      surface: "#171717"
      fg: "#f2f2f2"         # 17.7:1 on bg
      fg-muted: "#c4c4c4"   # 11.4:1 on bg, 10.3:1 on surface
      fg-subtle: "#9a9a9a"  # 7.0:1 on bg, 6.4:1 on surface
  font:
    display: Cabinet Grotesk (800-900, uppercase for headings)
    body: Satoshi
    label: Geist Mono (11px, uppercase, 0.18em tracking)
  radius: 0
  motion: { ease: "cubic-bezier(0.22, 1, 0.36, 1)", hover: 400-500ms, image: 700ms }
---

# Portfolio design system

A software engineer's portfolio drawn like an engineering sheet: black ink on paper, hairline
rules, label strips, title blocks. The structure follows asiimwenoble.com (single ruled column,
revision-table experience, Connect button), fixed where that site is weak: project names are
visible, every project has a case study, experience keeps its achievements, there's a skills
table, and body text is a readable sans, not monospace.

## Layout

- One ruled column, max 1100px, with vertical hairlines at both edges for the full page height.
- Fixed header as a single ruled row: H logo | section anchors | theme toggle | solid **Connect**
  button that goes to `/contact`.
- Home: Hero sheet, About (photo figure + bio + toolbox table), Work (2-column ruled grid of
  featured projects, then an "Also built" register), Journey (revision table), Talks (3-column
  ruled grid), a black Connect band, then the title-block footer.
- Every section: `border-t`, "+" crosshairs at its top corners, a mono eyebrow ("02 / Work"),
  and a display heading.
- Panels have a label strip across the top. Important panels (hero, case study header, contact)
  get L-shaped corner ticks and a hatched body.
- Grids share borders (`border-l border-t` on the grid, `border-r border-b` on each cell), so they
  read as a ruled table, never as floating cards.

## Colour

- Monochrome only. No accent hue. Hierarchy comes from `fg`, `fg-muted`, `fg-subtle`.
- Tokens live in `src/app/globals.css`; use `bg-bg`, `text-fg`, `border-border` etc. No hex in
  `.tsx` (the OG image is the one exception, because it renders outside the page).
- Light is the default. Dark is a `.dark` class on `<html>`, set by `ThemeToggle` and remembered.
- Photos in About and Talks are grayscale; project screenshots keep their colour.
- The hatch pattern is the only "gradient" allowed.

## Type

- Display (Cabinet Grotesk): the name at weight 900, uppercase, leading 0.82; section headings
  800 uppercase; card and row titles 700-800.
- Body (Satoshi): 16-18px, `text-pretty`, 60-75 characters per line.
- Labels (Geist Mono): `.label` class, for strips, dates, table heads and meta only.
- Big on purpose: hero name `clamp(3.4rem, 12.5vw, 9.5rem)`, section titles `text-5xl md:text-7xl`.

## Components

- **Buttons** (`.btn .btn-solid` / `.btn-outline`): square, 44px tall, mono uppercase. Hover
  inverts ink and paper over 400ms.
- **Text links:** underline that darkens on hover over 500ms, arrow nudges.
- **Work card:** strip (number / category | period), inset 16:10 image (hatch with the title when
  there's no screenshot), big uppercase title, tagline, role, problem, stack chips, then Case
  study / Live / Code.
- **Stack chips:** square, 1px border, mono 11px. Not pills.
- Radius is 0 everywhere. No shadows.

## Motion

- Slow and quiet: colour inversions and underline changes at 400-500ms, image zoom to 1.03 over
  700ms on card hover. Nothing else moves.
- No cursor spotlight, no background hover washes on content, no scroll reveals, no count-ups.
- `prefers-reduced-motion` turns transitions off.

## Copy

- First person, plain, specific. Real numbers only (they come from the résumé).
- Banned: em dashes in visitor-facing text, "seamless", "leverage", "elevate", "passionate",
  "cutting-edge", rhetorical questions as headings (except the Connect band), emoji as icons.

## Pre-ship checklist

- [ ] AA contrast in both themes (numbers above).
- [ ] Visible focus ring (2px ink outline) on every interactive element.
- [ ] No horizontal scroll at 375px; tap targets of 44px or more.
- [ ] Reduced motion honoured.
- [ ] Every image has alt text and explicit dimensions.
- [ ] `npm run lint`, `npm run typecheck` and `npm run build` pass.
