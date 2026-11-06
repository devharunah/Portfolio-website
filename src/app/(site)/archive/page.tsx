import type { Metadata } from "next";
import Link from "next/link";
import { Strip, TextLink } from "@/components/ui/primitives";
import { getContent, hasCaseStudy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Project archive",
  description: "Everything I've built, newest first.",
  alternates: { canonical: "/archive" },
};

export default async function ArchivePage() {
  const { projects } = await getContent();

  return (
    <section aria-labelledby="archive-title" className="px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
      <p className="label">Archive</p>
      <h1
        id="archive-title"
        className="mt-3 font-display text-[clamp(3rem,10vw,7.5rem)] font-black uppercase leading-[0.85] tracking-[-0.02em] text-fg"
      >
        All projects
      </h1>

      <div className="mt-14 border border-border-strong">
        <Strip left="Project register" right={`${projects.length} entries`} />
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-border">
              <th scope="col" className="label w-28 px-4 py-3 font-normal">When</th>
              <th scope="col" className="label px-4 py-3 font-normal">Project</th>
              <th scope="col" className="label hidden px-4 py-3 font-normal lg:table-cell">Role</th>
              <th scope="col" className="label hidden px-4 py-3 font-normal lg:table-cell">Built with</th>
              <th scope="col" className="label hidden px-4 py-3 font-normal sm:table-cell">Links</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.slug} className="border-b border-border last:border-none">
                <td className="label px-4 py-4 align-top tabular-nums">{p.period}</td>
                <td className="px-4 py-4 align-top">
                  {hasCaseStudy(p) ? (
                    <Link
                      href={`/work/${p.slug}`}
                      className="font-display text-xl font-extrabold uppercase text-fg underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-500 hover:decoration-fg"
                    >
                      {p.title}
                    </Link>
                  ) : (
                    <span className="font-display text-xl font-extrabold uppercase text-fg">{p.title}</span>
                  )}
                  <span className="mt-1 block text-sm">{p.tagline}</span>
                </td>
                <td className="hidden px-4 py-4 align-top text-sm lg:table-cell">{p.role}</td>
                <td className="hidden px-4 py-4 align-top font-mono text-xs text-fg-subtle lg:table-cell">{p.stack.join(" / ")}</td>
                <td className="hidden px-4 py-4 align-top text-sm sm:table-cell">
                  <span className="flex flex-col gap-1">
                    {p.liveUrl && <TextLink href={p.liveUrl}>{new URL(p.liveUrl).host.replace(/^www\./, "")}</TextLink>}
                    {p.repoUrl && <TextLink href={p.repoUrl}>Code</TextLink>}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
