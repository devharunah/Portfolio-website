import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CornerTicks, StackLine, Strip, TextLink } from "@/components/ui/primitives";
import { RichText } from "@/components/ui/RichText";
import { getContent, getProject, hasCaseStudy } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { projects } = await getContent();
  return projects.filter(hasCaseStudy).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = await getProject(slug);
  if (!result) return {};
  const { project } = result;
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: project.cover
        ? [{ url: project.cover.src, width: project.cover.width, height: project.cover.height, alt: project.cover.alt }]
        : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const result = await getProject(slug);
  if (!result) notFound();
  const { project, prev, next } = result;

  const meta = [
    { label: "Role", value: project.role },
    { label: "When", value: project.period },
  ].filter((m) => m.value);

  return (
    <article className="px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
      <Link href="/#work" className="btn btn-outline">
        <ArrowLeft aria-hidden className="size-4" />
        All work
      </Link>

      <header className="relative mt-10 border border-border-strong">
        <CornerTicks />
        <Strip left="Case study" right={project.period} />
        <div className="hatch px-5 py-12 md:px-10 md:py-16">
          <h1 className="font-display text-[clamp(3rem,10vw,7.5rem)] font-black uppercase leading-[0.85] tracking-[-0.02em] text-fg">
            {project.title}
          </h1>
          <p className="mt-8 max-w-2xl border-l-2 border-fg pl-5 text-lg font-medium text-pretty text-fg md:text-xl">
            {project.tagline}
          </p>
        </div>
        <dl className="grid border-t border-border md:grid-cols-[1fr_1fr_1.4fr]">
          {meta.map((m) => (
            <div key={m.label} className="border-b border-border p-4 md:border-b-0 md:border-r md:p-5">
              <dt className="label">{m.label}</dt>
              <dd className="mt-1 text-sm font-medium text-fg">{m.value}</dd>
            </div>
          ))}
          <div className="p-4 md:p-5">
            <dt className="label">Links</dt>
            <dd className="mt-1 flex flex-wrap gap-x-4 text-sm">
              {project.liveUrl && <TextLink href={project.liveUrl}>Live</TextLink>}
              {project.repoUrl && <TextLink href={project.repoUrl}>Code</TextLink>}
              {!project.liveUrl && !project.repoUrl && <span className="text-fg-subtle">Private</span>}
            </dd>
          </div>
        </dl>
        <div className="border-t border-border p-4 md:p-5">
          <p className="label">Stack</p>
          <StackLine items={project.stack} className="mt-2" />
        </div>
      </header>

      {project.cover && (
        <div className="mt-12 border border-border p-3">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={project.cover.width}
            height={project.cover.height}
            sizes="(min-width: 1100px) 1000px, 100vw"
            priority
            placeholder={project.cover.lqip ? "blur" : "empty"}
            blurDataURL={project.cover.lqip}
            className="w-full"
          />
        </div>
      )}

      <div className="mt-16 max-w-[68ch] text-lg">
        <RichText value={project.body} />
      </div>

      {project.gallery.length > 0 && (
        <section aria-label="Gallery" className="mt-16 grid border-l border-t border-border sm:grid-cols-2">
          {project.gallery.map((img) => (
            <div key={img.src} className="border-b border-r border-border p-3">
              <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(min-width: 640px) 500px, 100vw" className="w-full" />
            </div>
          ))}
        </section>
      )}

      <nav aria-label="More projects" className="mt-20 grid border-l border-t border-border sm:grid-cols-2">
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="group border-b border-r border-border p-5 transition-colors duration-500 hover:bg-fg hover:text-bg">
            <span className="label flex items-center gap-2 group-hover:text-bg">
              <ArrowLeft aria-hidden className="size-3.5" /> Previous
            </span>
            <span className="mt-2 block font-display text-2xl font-extrabold uppercase text-fg group-hover:text-bg">{prev.title}</span>
          </Link>
        ) : (
          <span className="hidden border-b border-r border-border sm:block" />
        )}
        {next ? (
          <Link href={`/work/${next.slug}`} className="group border-b border-r border-border p-5 text-right transition-colors duration-500 hover:bg-fg hover:text-bg">
            <span className="label flex items-center justify-end gap-2 group-hover:text-bg">
              Next <ArrowRight aria-hidden className="size-3.5" />
            </span>
            <span className="mt-2 block font-display text-2xl font-extrabold uppercase text-fg group-hover:text-bg">{next.title}</span>
          </Link>
        ) : (
          <span className="hidden border-b border-r border-border sm:block" />
        )}
      </nav>
    </article>
  );
}
