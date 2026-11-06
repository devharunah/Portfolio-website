import { Hero } from "@/components/sections/Hero";
import { About, ConnectBand, Journey, Talks, Work } from "@/components/sections/HomeSections";
import { getContent } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export default async function HomePage() {
  const { profile, projects, experience, talks } = await getContent();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.tagline,
    url: siteUrl,
    email: profile.email ? `mailto:${profile.email}` : undefined,
    address: profile.location ? { "@type": "PostalAddress", addressLocality: profile.location } : undefined,
    sameAs: profile.socials.map((s) => s.href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd).replace(/</g, "\\u003c") }}
      />
      <Hero profile={profile} experience={experience} />
      <About profile={profile} />
      <Work featured={featured} others={others} />
      <Journey items={experience} />
      <Talks talks={talks} />
      <ConnectBand />
    </>
  );
}
