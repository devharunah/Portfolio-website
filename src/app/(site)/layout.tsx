import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getContent } from "@/lib/content";

/** Every site page sits in one ruled column: vertical hairlines at the container edges. */
export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const { profile } = await getContent();
  return (
    <>
      <a
        href="#content"
        className="fixed left-4 top-4 z-50 -translate-y-24 bg-fg px-4 py-3 text-sm font-medium text-bg focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <div className="mx-auto min-h-screen max-w-[1100px] border-x border-border">
        <main id="content" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer profile={profile} />
      </div>
    </>
  );
}
