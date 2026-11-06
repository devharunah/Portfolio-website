import { FolderKanban as ProjectsIcon } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";
import { imageWithAlt, richText, stackField } from "./fields";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ProjectsIcon,
  groups: [
    { name: "card", title: "Card", default: true },
    { name: "caseStudy", title: "Case study" },
  ],
  fields: [
    defineField({ name: "title", type: "string", group: "card", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      group: "card",
      options: { source: "title", maxLength: 64 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "featured",
      type: "boolean",
      group: "card",
      description: "Featured projects get a card on the home page. The rest go in the archive.",
      initialValue: false,
    }),
    defineField({
      name: "order",
      type: "number",
      group: "card",
      description: "Lower numbers show first.",
      initialValue: 100,
    }),
    defineField({
      name: "tagline",
      type: "string",
      group: "card",
      description: "One line, under about 90 characters.",
      validation: (r) => r.required().max(120),
    }),
    defineField({ name: "period", type: "string", group: "card", description: 'e.g. "2026" or "2025 – Present"' }),
    defineField({ name: "role", type: "string", group: "card", description: 'e.g. "Solo engineer"' }),
    defineField({
      name: "category",
      type: "string",
      group: "card",
      options: {
        list: [
          { title: "Fintech / payments", value: "fintech" },
          { title: "Creator economy", value: "creator" },
          { title: "Machine learning", value: "ml" },
          { title: "3D / WebGL", value: "3d" },
          { title: "Web", value: "web" },
          { title: "Other", value: "other" },
        ],
        layout: "radio",
      },
      initialValue: "web",
    }),
    defineField({
      name: "problem",
      type: "text",
      rows: 3,
      group: "card",
      description: "Two sentences: the problem and what the project does about it.",
    }),
    defineField({
      name: "impact",
      title: "Highlights",
      type: "array",
      group: "card",
      of: [defineArrayMember({ type: "string" })],
      description: "Up to three short, concrete bullets. No invented numbers.",
      validation: (r) => r.max(3),
    }),
    { ...stackField, group: "card" },
    { ...imageWithAlt("cover", "Cover image"), group: "card" },
    defineField({ name: "liveUrl", title: "Live URL", type: "url", group: "card" }),
    defineField({ name: "repoUrl", title: "Code URL", type: "url", group: "card" }),
    { ...richText("body", "Case study"), group: "caseStudy" },
    defineField({
      name: "gallery",
      type: "array",
      group: "caseStudy",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", type: "string", validation: (r) => r.required() })],
        }),
      ],
    }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "tagline", media: "cover", featured: "featured" },
    prepare: ({ title, subtitle, media, featured }) => ({
      title: featured ? `★ ${title}` : title,
      subtitle,
      media,
    }),
  },
});
