/** Canonical URL, used for metadata, sitemap and OG images. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kakooza-harunah.vercel.app").replace(/\/$/, "");

/** Home page sections, in order. Drives the header nav and the section ids. */
export const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "journey", label: "Journey" },
  { id: "talks", label: "Talks" },
] as const;

export const isExternal = (href: string) => /^(https?:|mailto:)/.test(href);
