import { Briefcase as CaseIcon, Mic as MicrophoneIcon } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";
import { imageWithAlt, stackField } from "./fields";

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({ name: "role", type: "string", validation: (r) => r.required() }),
    defineField({ name: "company", type: "string", validation: (r) => r.required() }),
    defineField({ name: "url", title: "Company URL", type: "url" }),
    defineField({ name: "period", type: "string", description: 'e.g. "2025 – Present"', validation: (r) => r.required() }),
    defineField({ name: "order", type: "number", description: "Lower numbers show first.", initialValue: 100 }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({
      name: "highlights",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description: "What you did and what changed. Real numbers only.",
    }),
    stackField,
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "company", subtitle: "role" } },
});

export const talk = defineType({
  name: "talk",
  title: "Talk",
  type: "document",
  icon: MicrophoneIcon,
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "event", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", type: "string", description: 'e.g. "Nov 2026"' }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "url", title: "Slides, video or demo URL", type: "url" }),
    imageWithAlt("photo", "Photo"),
  ],
  preview: { select: { title: "title", subtitle: "event", media: "photo" } },
});
