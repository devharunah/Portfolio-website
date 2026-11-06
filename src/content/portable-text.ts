import type { PortableTextBlock } from "@portabletext/react";

/**
 * Tiny authoring helpers so fallback/seed content can be written as plain strings.
 * `p("I work at [Aaron Douglas](https://aarondouglas.us/).")` becomes a Portable Text
 * paragraph with a link annotation. `h2("Problem")` becomes a heading block.
 */

let counter = 0;
const key = () => `k${(counter++).toString(36)}`;

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

export function p(text: string): PortableTextBlock {
  const children: PortableTextBlock["children"] = [];
  const markDefs: { _key: string; _type: "link"; href: string }[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, label, href] = match;
    const start = match.index ?? 0;
    if (start > last) {
      children.push({ _type: "span", _key: key(), text: text.slice(last, start), marks: [] });
    }
    const linkKey = key();
    markDefs.push({ _key: linkKey, _type: "link", href });
    children.push({ _type: "span", _key: key(), text: label, marks: [linkKey] });
    last = start + whole.length;
  }
  if (last < text.length) {
    children.push({ _type: "span", _key: key(), text: text.slice(last), marks: [] });
  }
  return { _type: "block", _key: key(), style: "normal", markDefs, children };
}

export function h2(text: string): PortableTextBlock {
  return {
    _type: "block",
    _key: key(),
    style: "h2",
    markDefs: [],
    children: [{ _type: "span", _key: key(), text, marks: [] }],
  };
}

export function bullets(items: string[]): PortableTextBlock[] {
  return items.map((item) => ({ ...p(item), listItem: "bullet", level: 1 }));
}
