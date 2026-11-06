import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { CornerTicks, Strip } from "@/components/ui/primitives";
import type { Experience, Profile } from "@/lib/types";

/** The opening sheet: who, what, and the two things to do next. No headshot. */
export function Hero({ profile, experience }: { profile: Profile; experience: Experience[] }) {
  const current = experience.filter((e) => /present/i.test(e.period)).map((e) => e.company);
  const [first, ...rest] = profile.name.split(" ");

  const block = [
    { label: "Role", value: profile.role },
    { label: "Based in", value: profile.location },
    { label: "Currently", value: current.join(" / ") || "Independent" },
    { label: "Status", value: profile.status || "Building" },
  ];

  return (
    <section aria-labelledby="hero-title" className="px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36">
      <div className="relative border border-border-strong">
        <CornerTicks />
        <Strip left="Portfolio / Rev. 2026" right={profile.location} />

        <div className="hatch px-5 py-14 md:px-10 md:py-20">
          <h1
            id="hero-title"
            className="font-display text-[clamp(3.4rem,12.5vw,9.5rem)] font-black uppercase leading-[0.82] tracking-[-0.025em] text-fg"
          >
            <span className="block">{first}</span>
            <span className="block">{rest.join(" ")}</span>
          </h1>
          <p className="mt-10 max-w-2xl border-l-2 border-fg pl-5 text-lg font-medium leading-snug text-pretty text-fg md:text-2xl">
            {profile.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-solid">
              Connect with me
            </Link>
            <Link href="/#work" className="btn btn-outline bg-bg/70">
              See the work
              <ArrowDown aria-hidden className="size-4" />
            </Link>
          </div>
        </div>

        <dl className="grid grid-cols-2 border-t border-border md:grid-cols-4">
          {block.map((c, i) => (
            <div
              key={c.label}
              className={`border-border p-4 md:p-5 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} md:border-r md:last:border-r-0`}
            >
              <dt className="label">{c.label}</dt>
              <dd className="mt-1 text-sm font-medium text-fg">{c.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
