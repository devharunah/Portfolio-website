import { User as UserIcon } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";
import { imageWithAlt, richText } from "./fields";

export const profile = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "role",
      type: "string",
      description: 'Shown under your name, e.g. "Full-stack software engineer".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      type: "text",
      rows: 2,
      description: "One sentence on what you build. Keep it under about 140 characters.",
      validation: (r) => r.required().max(180),
    }),
    defineField({ name: "location", type: "string" }),
    defineField({
      name: "status",
      type: "string",
      description: 'Availability line, e.g. "Open to remote roles". Leave empty to hide.',
    }),
    richText("bio", "About"),
    defineField({
      name: "skills",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "skillGroup",
          fields: [
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "items", type: "array", of: [defineArrayMember({ type: "string" })], options: { layout: "tags" } }),
          ],
          preview: { select: { title: "label" } },
        }),
      ],
    }),
    imageWithAlt("photo", "Photo"),
    defineField({ name: "email", type: "string", validation: (r) => r.email() }),
    defineField({ name: "resume", title: "Résumé (PDF)", type: "file", options: { accept: "application/pdf" } }),
    defineField({
      name: "socials",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "social",
          fields: [
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "href", type: "url", validation: (r) => r.required() }),
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        }),
      ],
    }),
  ],
  preview: { select: { title: "name", subtitle: "role" } },
});
