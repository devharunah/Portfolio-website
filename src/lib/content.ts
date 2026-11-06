import { cache } from "react";
import { siteContent } from "@/content/site";
import { client } from "@/sanity/client";
import { SITE_QUERY } from "@/sanity/queries";
import type { Project, SiteContent } from "./types";

/** Cache tags. The Sanity webhook revalidates by document _type, so these match. */
export const contentTags = ["profile", "project", "experience", "talk"];

/**
 * The only way components read content. Uses Sanity when it's configured and seeded,
 * otherwise the fallback in src/content/site.ts so the site always renders.
 */
export const getContent = cache(async (): Promise<SiteContent> => {
  if (!client) return siteContent;

  try {
    const data = (await client.fetch(SITE_QUERY, {}, {
      next: { tags: contentTags, revalidate: 3600 },
    })) as unknown as Partial<SiteContent> & { profile: SiteContent["profile"] | null };

    // Not seeded yet: nothing to show from Sanity.
    if (!data.profile) return siteContent;

    return {
      profile: data.profile,
      projects: data.projects ?? [],
      experience: data.experience ?? [],
      talks: data.talks ?? [],
    };
  } catch (error) {
    console.error("[content] Sanity fetch failed, using fallback content", error);
    return siteContent;
  }
});

export async function getProject(slug: string): Promise<{
  project: Project;
  prev: Project | null;
  next: Project | null;
} | null> {
  const { projects } = await getContent();
  const withStudy = projects.filter(hasCaseStudy);
  const index = withStudy.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  return {
    project: withStudy[index],
    prev: withStudy[index - 1] ?? null,
    next: withStudy[index + 1] ?? null,
  };
}

export const hasCaseStudy = (p: Project) => p.body.length > 0;
