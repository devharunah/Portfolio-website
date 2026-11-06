import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { isExternal } from "@/lib/site";

/** Tech names as a ruled mono line: "Next.js / Supabase / Stripe". */
export function StackLine({ items, className = "" }: { items: string[]; className?: string }) {
  if (items.length === 0) return null;
  return (
    <ul aria-label="Built with" className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="border border-border px-2 py-1 font-mono text-[11px] leading-4 text-fg-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Text link with an arrow. External links open in a new tab and say so. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = isExternal(href);
  const classes = `group/link inline-flex items-center gap-1 font-medium text-fg underline decoration-border-strong decoration-1 underline-offset-4 transition-[text-decoration-color] duration-500 hover:decoration-fg ${className}`;
  const arrow = (
    <ArrowUpRight
      aria-hidden
      className="size-4 shrink-0 transition-transform duration-500 ease-out-soft group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
    />
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>
        {children}
        {arrow}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}

/** "+" registration marks at a block's top corners (decorative). */
export function Crosshairs() {
  const mark = (side: string) => (
    <svg aria-hidden viewBox="0 0 11 11" className={`absolute -top-[6px] size-[11px] text-fg-subtle ${side}`}>
      <path d="M5.5 0v11M0 5.5h11" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
  return (
    <>
      {mark("-left-[6px]")}
      {mark("-right-[6px]")}
    </>
  );
}

/** L-shaped ticks just outside each corner of a panel (decorative). */
export function CornerTicks() {
  const base = "pointer-events-none absolute size-3 border-fg";
  return (
    <>
      <span aria-hidden className={`${base} -left-2 -top-2 border-l border-t`} />
      <span aria-hidden className={`${base} -right-2 -top-2 border-r border-t`} />
      <span aria-hidden className={`${base} -bottom-2 -left-2 border-b border-l`} />
      <span aria-hidden className={`${base} -bottom-2 -right-2 border-b border-r`} />
    </>
  );
}

/** The label strip across the top of a panel. */
export function Strip({ left, right }: { left: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div className="flex min-h-9 items-center justify-between gap-4 border-b border-border px-4">
      <span className="label">{left}</span>
      {right ? <span className="label text-right">{right}</span> : null}
    </div>
  );
}

/** A full-width home-page section with a big display heading. */
export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative scroll-mt-16 border-t border-border px-5 py-20 md:px-10 md:py-28">
      <Crosshairs />
      <p className="label">{eyebrow}</p>
      <h2
        id={`${id}-title`}
        className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.01em] text-balance text-fg md:text-7xl"
      >
        {title}
      </h2>
      <div className="mt-12 md:mt-16">{children}</div>
    </section>
  );
}
