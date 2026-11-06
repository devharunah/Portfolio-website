import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Crosshairs, Section, StackLine, Strip, TextLink } from "@/components/ui/primitives";
import { RichText } from "@/components/ui/RichText";
import type { Experience, Profile, Project, Talk } from "@/lib/types";
import { WorkCard } from "./WorkCard";

export function About({ profile }: { profile: Profile }) {
  return (
    <Section id="about" eyebrow="01 / About" title="About me">
      <div className="grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14">
        {profile.photo && (
          <figure className="group self-start border border-border-strong">
            <Strip left="Fig. 01 / Portrait" />
            <div className="overflow-hidden p-3">
              <Image
                src={profile.photo.src}
                alt={profile.photo.alt}
                width={profile.photo.width}
                height={profile.photo.height}
                sizes="(min-width: 768px) 420px, 100vw"
                quality={90}
                placeholder={profile.photo.lqip ? "blur" : "empty"}
                blurDataURL={profile.photo.lqip}
                className="h-auto w-full grayscale transition-[filter] duration-700 ease-out-soft group-hover:grayscale-0"
              />
            </div>
            <figcaption className="flex items-center gap-3 border-t border-border px-4 py-3">
              <span aria-hidden className="h-px flex-1 bg-border-strong" />
              <span className="label">{profile.name} / {profile.location.split(",")[0]}</span>
              <span aria-hidden className="h-px flex-1 bg-border-strong" />
            </figcaption>
          </figure>
        )}
        <div className="text-lg leading-relaxed">
          <RichText value={profile.bio} />
        </div>
      </div>

      {profile.skills.length > 0 && (
        <div className="mt-16 border border-border">
          <Strip left="Toolbox" right={`${profile.skills.reduce((n, g) => n + g.items.length, 0)} tools`} />
          <dl>
            {profile.skills.map((group) => (
              <div key={group.label} className="grid border-b border-border last:border-b-0 md:grid-cols-[12rem_1fr]">
                <dt className="label border-border px-4 pt-4 md:border-r md:py-4">{group.label}</dt>
                <dd className="px-4 pb-4 pt-1 font-medium text-fg md:py-3.5">{group.items.join("  /  ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </Section>
  );
}

export function Work({ featured, others }: { featured: Project[]; others: Project[] }) {
  return (
    <Section id="work" eyebrow="02 / Work" title="What I've built">
      <ol className="grid border-l border-t border-border md:grid-cols-2">
        {featured.map((project, i) => (
          <li key={project.slug} className="border-b border-r border-border">
            <WorkCard project={project} index={i + 1} />
          </li>
        ))}
      </ol>

      {others.length > 0 && (
        <div className="mt-16 border border-border">
          <Strip left="Also built" right={`${others.length} projects`} />
          <ul>
            {others.map((p) => {
              const href = p.liveUrl ?? p.repoUrl;
              return (
                <li
                  key={p.slug}
                  className="grid gap-1 border-b border-border px-4 py-4 last:border-b-0 md:grid-cols-[6rem_minmax(0,1fr)_minmax(0,16rem)] md:items-baseline md:gap-6"
                >
                  <span className="label tabular-nums">{p.period}</span>
                  <span>
                    {href ? (
                      <TextLink href={href} className="font-display text-xl font-bold no-underline">
                        {p.title}
                      </TextLink>
                    ) : (
                      <span className="font-display text-xl font-bold text-fg">{p.title}</span>
                    )}
                    <span className="mt-1 block text-sm">{p.tagline}</span>
                  </span>
                  <span className="font-mono text-xs text-fg-subtle">{p.stack.join(" / ")}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <Link href="/archive" className="btn btn-outline mt-8">
        Full project archive
        <ArrowRight aria-hidden className="size-4" />
      </Link>
    </Section>
  );
}

/** Experience as a drawing's revision table, newest first, with the achievements kept. */
export function Journey({ items }: { items: Experience[] }) {
  if (items.length === 0) return null;
  return (
    <Section id="journey" eyebrow="03 / Experience" title="The journey so far">
      <div className="border border-border">
        <div className="hidden grid-cols-[5rem_12rem_1fr] border-b border-border md:grid" aria-hidden>
          <span className="label border-r border-border px-4 py-3">Rev</span>
          <span className="label border-r border-border px-4 py-3">Period</span>
          <span className="label px-4 py-3">Description</span>
        </div>
        <ol>
          {items.map((job, i) => (
            <li
              key={job.id}
              className="grid grid-cols-[4rem_1fr] border-b border-border last:border-b-0 md:grid-cols-[5rem_12rem_1fr]"
            >
              <span className="label row-span-2 border-r border-border px-4 py-5 tabular-nums text-fg md:row-span-1">
                R{String(items.length - i).padStart(2, "0")}
              </span>
              <span className="label px-4 pt-5 tabular-nums md:border-r md:border-border md:py-5">{job.period}</span>
              <div className="px-4 pb-6 pt-2 md:py-5">
                <h3 className="font-display text-2xl font-extrabold leading-tight text-fg md:text-3xl">{job.role}</h3>
                <p className="mt-1 font-medium text-fg">
                  {job.url ? <TextLink href={job.url}>{job.company}</TextLink> : job.company}
                </p>
                {job.summary && <p className="mt-2 text-sm">{job.summary}</p>}
                {job.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2 text-[15px] leading-relaxed">
                    {job.highlights.map((h) => (
                      <li key={h} className="grid grid-cols-[1rem_1fr] gap-2">
                        <span aria-hidden className="mt-3 h-px w-3 bg-fg" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <StackLine items={job.stack} className="mt-4" />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function Talks({ talks }: { talks: Talk[] }) {
  if (talks.length === 0) return null;
  return (
    <Section id="talks" eyebrow="04 / Community" title="On stage & in the room">
      <ul className="grid border-l border-t border-border md:grid-cols-3">
        {talks.map((talk) => (
          <li key={talk.id} className="group flex flex-col border-b border-r border-border">
            <Strip left={talk.event} right={talk.date} />
            <div className="p-3">
              {talk.photo ? (
                <Image
                  src={talk.photo.src}
                  alt={talk.photo.alt}
                  width={talk.photo.width}
                  height={talk.photo.height}
                  sizes="(min-width: 768px) 340px, 100vw"
                  className="aspect-[16/10] w-full object-cover grayscale transition-[filter] duration-700 ease-out-soft group-hover:grayscale-0"
                />
              ) : (
                <div className="hatch aspect-[16/10] w-full border border-border" aria-hidden />
              )}
            </div>
            <div className="flex flex-1 flex-col px-4 pb-5">
              <h3 className="font-display text-xl font-bold leading-snug text-balance text-fg">{talk.title}</h3>
              {talk.summary && <p className="mt-2 text-sm leading-relaxed">{talk.summary}</p>}
              {talk.url && (
                <p className="mt-auto pt-4 text-sm">
                  <TextLink href={talk.url}>Code</TextLink>
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function ConnectBand() {
  return (
    <section aria-labelledby="connect-title" className="relative border-t border-border bg-fg px-5 py-20 text-bg md:px-10 md:py-28">
      <Crosshairs />
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">05 / Connect</p>
      <h2 id="connect-title" className="mt-3 max-w-4xl font-display text-5xl font-black uppercase leading-[0.9] text-balance md:text-8xl">
        Have something to build?
      </h2>
      <p className="mt-6 max-w-xl text-lg opacity-80">
        Hiring, starting a product with payments or ML, or looking for a speaker. Tell me about it.
      </p>
      <Link
        href="/contact"
        className="btn mt-10 border-bg bg-bg text-fg transition-colors duration-500 hover:bg-fg hover:text-bg"
      >
        Connect with me
        <ArrowRight aria-hidden className="size-4" />
      </Link>
    </section>
  );
}
