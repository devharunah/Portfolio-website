import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { CornerTicks, Strip, TextLink } from "@/components/ui/primitives";
import { getContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hiring, building something, or need a speaker? Get in touch.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage() {
  const { profile } = await getContent();
  const firstName = profile.name.split(" ").at(-1) ?? profile.name;

  return (
    <section aria-labelledby="contact-title" className="px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
      <p className="label">Connect</p>
      <h1
        id="contact-title"
        className="mt-3 font-display text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.02em] text-fg"
      >
        Let&apos;s build
        <br />
        something
      </h1>
      <p className="mt-8 max-w-xl border-l-2 border-fg pl-5 text-lg text-fg">
        Roles, contracts, products with payments or ML, talks and meetups. I usually reply within two days.
      </p>

      <div className="relative mt-16 grid border border-border-strong md:grid-cols-[3fr_2fr]">
        <CornerTicks />
        <div className="border-b border-border md:border-b-0 md:border-r">
          <Strip left="Message" right="Opens your mail app" />
          <div className="p-5 md:p-8">
            {profile.email ? (
              <ContactForm email={profile.email} firstName={firstName} />
            ) : (
              <p>Email isn&apos;t set yet. Reach me through any of the links alongside.</p>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <Strip left="Elsewhere" />
          <div className="hatch flex flex-1 flex-col gap-8 p-5 md:p-8">
            {profile.email && (
              <div>
                <p className="label mb-2">Email</p>
                <CopyEmail email={profile.email} />
              </div>
            )}
            <div>
              <p className="label mb-2">Profiles</p>
              <ul className="grid grid-cols-2 border-l border-t border-border-strong bg-bg">
                {profile.socials.map((s) => (
                  <li key={s.href} className="border-b border-r border-border-strong">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex min-h-14 items-center justify-center px-3 font-mono text-xs uppercase tracking-[0.18em] text-fg transition-colors duration-500 hover:bg-fg hover:text-bg"
                    >
                      {s.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {profile.resumeUrl && (
              <p>
                <TextLink href={profile.resumeUrl}>Download my résumé</TextLink>
              </p>
            )}
            <div className="mt-auto bg-bg p-4">
              <p className="label">Based in</p>
              <p className="mt-1 font-medium text-fg">{profile.location}</p>
              {profile.status && <p className="mt-1 text-sm">{profile.status}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
