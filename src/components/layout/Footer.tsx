import { Logo } from "@/components/ui/Logo";
import type { Profile } from "@/lib/types";

/** Footer as a drawing title block: logo plus label/value cells. */
export function Footer({ profile }: { profile: Profile }) {
  const cells = [
    { label: "Built by", value: profile.name },
    { label: "Based in", value: profile.location },
    { label: "Set in", value: "Cabinet Grotesk & Satoshi" },
    { label: "Revision", value: String(new Date().getFullYear()) },
  ];

  return (
    <footer className="border-t border-border">
      <div className="grid grid-cols-2 md:grid-cols-[auto_repeat(4,1fr)]">
        <div className="col-span-2 flex items-center border-b border-border p-5 text-fg md:col-span-1 md:border-b-0 md:border-r">
          <Logo className="size-9" />
        </div>
        {cells.map((c, i) => (
          <div
            key={c.label}
            className={`border-border p-5 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} md:border-r md:last:border-r-0`}
          >
            <p className="label">{c.label}</p>
            <p className="mt-1 text-sm text-fg">{c.value}</p>
          </div>
        ))}
      </div>
      {profile.socials.length > 0 && (
        <ul aria-label="Elsewhere" className="flex flex-wrap border-t border-border">
          {profile.socials.map((s) => (
            <li key={s.href} className="border-r border-border">
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-12 items-center px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted transition-colors duration-500 hover:bg-fg hover:text-bg"
              >
                {s.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </footer>
  );
}
