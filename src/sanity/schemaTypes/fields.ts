import { defineArrayMember, defineField } from "sanity";

/** An image with required alt text. */
export const imageWithAlt = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alt text",
        type: "string",
        description: "Describe what's in the image for screen readers. Required.",
        validation: (rule) => rule.required(),
      }),
    ],
  });

/** Rich text: paragraphs, h2/h3, bullet lists, links, inline images. */
export const richText = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "array",
    of: [
      defineArrayMember({
        type: "block",
        styles: [
          { title: "Paragraph", value: "normal" },
          { title: "Heading", value: "h2" },
          { title: "Subheading", value: "h3" },
        ],
        lists: [
          { title: "Bullets", value: "bullet" },
          { title: "Numbered", value: "number" },
        ],
        marks: {
          decorators: [
            { title: "Bold", value: "strong" },
            { title: "Italic", value: "em" },
            { title: "Code", value: "code" },
          ],
          annotations: [
            defineArrayMember({
              name: "link",
              type: "object",
              title: "Link",
              fields: [
                defineField({
                  name: "href",
                  type: "url",
                  validation: (rule) =>
                    rule.uri({ scheme: ["http", "https", "mailto"], allowRelative: true }),
                }),
              ],
            }),
          ],
        },
      }),
      defineArrayMember({
        type: "image",
        options: { hotspot: true },
        fields: [
          defineField({ name: "alt", title: "Alt text", type: "string", validation: (r) => r.required() }),
          defineField({ name: "caption", title: "Caption", type: "string" }),
        ],
      }),
    ],
  });

export const stackField = defineField({
  name: "stack",
  title: "Tech stack",
  type: "array",
  of: [defineArrayMember({ type: "string" })],
  options: { layout: "tags" },
});
