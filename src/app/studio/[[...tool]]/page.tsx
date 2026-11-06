import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="mx-auto max-w-xl px-6 py-24 text-fg-muted">
        <h1 className="text-xl font-semibold text-fg">Sanity isn&apos;t connected yet</h1>
        <p className="mt-4 leading-relaxed">
          Create a project at sanity.io/manage (or run <code className="font-mono text-fg">npx sanity@latest init</code>
          ), then set <code className="font-mono text-fg">NEXT_PUBLIC_SANITY_PROJECT_ID</code> in{" "}
          <code className="font-mono">.env.local</code> and restart the dev server.
        </p>
      </main>
    );
  }
  return <NextStudio config={config} />;
}
