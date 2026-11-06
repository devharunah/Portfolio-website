import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { sections } from "@/lib/site";

/** Fixed header that reads as one ruled row: logo | nav | theme | Connect. */
export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1100px] items-stretch border-x border-border">
        <Link href="/" aria-label="Kakooza Harunah, home" className="flex items-center border-r border-border px-4 text-fg md:px-5">
          <Logo className="size-8" />
        </Link>

        <nav aria-label="Sections" className="hidden flex-1 items-stretch lg:flex">
          {sections.map((s) => (
            <Link
              key={s.id}
              href={`/#${s.id}`}
              className="flex items-center border-r border-border px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted transition-colors duration-500 hover:bg-surface hover:text-fg"
            >
              {s.label}
            </Link>
          ))}
        </nav>
        <div className="flex-1 lg:hidden" />

        <div className="flex items-center border-l border-border">
          <ThemeToggle className="h-full w-14" />
        </div>
        <Link href="/contact" className="btn btn-solid h-full border-0 border-l border-border px-5 md:px-7">
          Connect
        </Link>
      </div>
    </header>
  );
}
