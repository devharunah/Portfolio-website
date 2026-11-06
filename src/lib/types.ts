import type { PortableTextBlock } from "@portabletext/react";

/** An image ready for next/image, from Sanity or /public. */
export type Img = {
  src: string;
  alt: string;
  width: number;
  height: number;
  lqip?: string;
};

export type SocialLink = { label: string; href: string };

export type SkillGroup = { label: string; items: string[] };

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  status: string;
  bio: PortableTextBlock[];
  skills: SkillGroup[];
  photo: Img | null;
  email: string;
  resumeUrl: string | null;
  socials: SocialLink[];
};

export const projectCategories = ["fintech", "creator", "ml", "3d", "web", "other"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  period: string;
  role: string;
  category: ProjectCategory;
  featured: boolean;
  order: number;
  problem: string;
  impact: string[];
  stack: string[];
  cover: Img | null;
  gallery: Img[];
  liveUrl: string | null;
  repoUrl: string | null;
  body: PortableTextBlock[];
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  url: string | null;
  period: string;
  order: number;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type Talk = {
  id: string;
  title: string;
  event: string;
  date: string;
  summary: string;
  url: string | null;
  photo: Img | null;
};

export type SiteContent = {
  profile: Profile;
  projects: Project[];
  experience: Experience[];
  talks: Talk[];
};
