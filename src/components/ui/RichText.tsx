import { PortableText, type PortableTextBlock, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { isExternal } from "@/lib/site";

type RichImage = { src?: string; alt?: string; caption?: string; width?: number; height?: number };

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4 leading-relaxed text-pretty last:mb-0">{children}</p>,
    h2: ({ children }) => (
      <h2 className="mb-4 mt-14 font-display text-3xl font-extrabold uppercase leading-none text-balance text-fg first:mt-0">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="mb-2 mt-8 font-display text-xl font-bold text-fg">{children}</h3>,
  },
  list: {
    bullet: ({ children }) => <ul className="mb-4 list-disc space-y-2 pl-5 marker:text-fg">{children}</ul>,
    number: ({ children }) => <ol className="mb-4 list-decimal space-y-2 pl-5 marker:text-fg">{children}</ol>,
  },
  listItem: ({ children }) => <li className="pl-1 leading-relaxed">{children}</li>,
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-fg">{children}</strong>,
    code: ({ children }) => (
      <code className="bg-surface px-1.5 py-0.5 font-mono text-[0.85em] text-fg">{children}</code>
    ),
    link: ({ value, children }) => {
      const href = (value as { href?: string } | undefined)?.href ?? "#";
      const external = isExternal(href);
      return (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
          className="font-semibold text-fg underline decoration-border-strong underline-offset-4 transition-[text-decoration-color] duration-500 hover:decoration-fg"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: { value: RichImage }) =>
      value.src && value.width && value.height ? (
        <figure className="my-8">
          <Image
            src={value.src}
            alt={value.alt ?? ""}
            width={value.width}
            height={value.height}
            sizes="(min-width: 768px) 720px, 100vw"
            className="border border-border"
          />
          {value.caption && <figcaption className="mt-2 text-sm text-fg-subtle">{value.caption}</figcaption>}
        </figure>
      ) : null,
  },
};

export function RichText({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
