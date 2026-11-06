import type { MetadataRoute } from "next";
import { getContent, hasCaseStudy } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { projects } = await getContent();
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/archive`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.6 },
    ...projects.filter(hasCaseStudy).map((p) => ({
      url: `${siteUrl}/work/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
