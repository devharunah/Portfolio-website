import Image from "next/image";
import Link from "next/link";
import { StackLine, Strip, TextLink } from "@/components/ui/primitives";
import { hasCaseStudy } from "@/lib/content";
import type { Project, ProjectCategory } from "@/lib/types";

const categoryLabel: Record<ProjectCategory, string> = {
  fintech: "Payments",
  creator: "Creator economy",
  ml: "Machine learning",
  "3d": "3D / WebGL",
  web: "Web",
  other: "Project",
};

/** One cell in the ruled work grid. The name is visible and large; links are explicit. */
export function WorkCard({ project, index }: { project: Project; index: number }) {
  const caseStudy = hasCaseStudy(project) ? `/work/${project.slug}` : null;

  const frame = project.cover ? (
    <Image
      src={project.cover.src}
      alt={project.cover.alt}
      width={project.cover.width}
      height={project.cover.height}
      sizes="(min-width: 768px) 520px, 100vw"
      placeholder={project.cover.lqip ? "blur" : "empty"}
      blurDataURL={project.cover.lqip}
      className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
    />
  ) : (
    <div className="hatch flex aspect-[16/10] w-full items-end p-4" aria-hidden>
      <span className="font-display text-4xl font-black uppercase leading-none text-fg/15 md:text-5xl">
        {project.title}
      </span>
    </div>
  );

  return (
    <article className="group flex h-full flex-col">
      <Strip left={`${String(index).padStart(2, "0")} / ${categoryLabel[project.category]}`} right={project.period} />
      <div className="p-3">
        <div className="overflow-hidden border border-border">
          {caseStudy ? (
            <Link href={caseStudy} tabIndex={-1} aria-hidden>
              {frame}
            </Link>
          ) : (
            frame
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-5 md:px-5">
        <h3 className="font-display text-3xl font-extrabold uppercase leading-none text-fg md:text-4xl">
          {caseStudy ? (
            <Link href={caseStudy} className="underline decoration-transparent decoration-2 underline-offset-[6px] transition-[text-decoration-color] duration-500 hover:decoration-fg">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-2 font-medium text-fg">{project.tagline}</p>
        {project.role && <p className="label mt-3">{project.role}</p>}
        <p className="mt-3 text-sm leading-relaxed text-pretty">{project.problem}</p>
        <StackLine items={project.stack} className="mt-4" />

        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-sm">
          {caseStudy && <TextLink href={caseStudy}>Case study</TextLink>}
          {project.liveUrl && <TextLink href={project.liveUrl}>Live</TextLink>}
          {project.repoUrl && <TextLink href={project.repoUrl}>Code</TextLink>}
        </div>
      </div>
    </article>
  );
}
