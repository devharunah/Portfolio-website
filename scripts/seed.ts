/**
 * Copies the content in src/content/site.ts into Sanity, uploading images from /public.
 *
 *   npm run seed            # creates documents that don't exist yet, never overwrites
 *   npm run seed -- --force # replaces existing documents with the file's version
 *
 * Needs NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET and
 * SANITY_API_WRITE_TOKEN (an Editor token from sanity.io/manage → API → Tokens) in .env.local.
 */
import { createReadStream, existsSync } from "node:fs";
import path from "node:path";
import { createClient } from "next-sanity";
import { siteContent } from "../src/content/site";
import type { Img } from "../src/lib/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN;
const force = process.argv.includes("--force");

if (!projectId || !token) {
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local first.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2026-11-01", useCdn: false });

const uploaded = new Map<string, string>();

/** Uploads a /public image once and returns a Sanity image field. Sanity also de-dupes by hash. */
async function image(img: Img | null) {
  if (!img) return undefined;
  const file = path.join(process.cwd(), "public", img.src);
  if (!existsSync(file)) {
    console.warn(`  ! missing ${img.src}, skipped`);
    return undefined;
  }
  let ref = uploaded.get(file);
  if (!ref) {
    const asset = await client.assets.upload("image", createReadStream(file), { filename: path.basename(file) });
    ref = asset._id;
    uploaded.set(file, ref);
    console.log(`  ↑ ${img.src}`);
  }
  return { _type: "image", asset: { _type: "reference", _ref: ref }, alt: img.alt };
}

async function main() {
  const { profile, projects, experience, talks } = siteContent;
  const docs: Array<{ _id: string; _type: string; [key: string]: unknown }> = [];

  docs.push({
    _id: "profile",
    _type: "profile",
    name: profile.name,
    role: profile.role,
    tagline: profile.tagline,
    location: profile.location,
    status: profile.status,
    bio: profile.bio,
    skills: profile.skills.map((g, i) => ({ _key: `g${i}`, _type: "skillGroup", ...g })),
    photo: await image(profile.photo),
    email: profile.email || undefined,
    socials: profile.socials.map((s, i) => ({ _key: `s${i}`, _type: "social", ...s })),
  });

  for (const p of projects) {
    docs.push({
      _id: `project-${p.slug}`,
      _type: "project",
      title: p.title,
      slug: { _type: "slug", current: p.slug },
      featured: p.featured,
      order: p.order,
      tagline: p.tagline,
      period: p.period,
      role: p.role,
      category: p.category,
      problem: p.problem,
      impact: p.impact,
      stack: p.stack,
      cover: await image(p.cover),
      liveUrl: p.liveUrl ?? undefined,
      repoUrl: p.repoUrl ?? undefined,
      body: p.body,
    });
  }

  for (const e of experience) {
    docs.push({
      _id: `experience-${e.id}`,
      _type: "experience",
      role: e.role,
      company: e.company,
      url: e.url ?? undefined,
      period: e.period,
      order: e.order,
      summary: e.summary,
      highlights: e.highlights,
      stack: e.stack,
    });
  }

  for (const t of talks) {
    docs.push({
      _id: `talk-${t.id}`,
      _type: "talk",
      title: t.title,
      event: t.event,
      date: t.date,
      summary: t.summary,
      url: t.url ?? undefined,
      photo: await image(t.photo),
    });
  }

  const tx = client.transaction();
  for (const doc of docs) {
    if (force) tx.createOrReplace(doc);
    else tx.createIfNotExists(doc);
  }
  await tx.commit();
  console.log(`\n${force ? "Replaced" : "Created (if missing)"} ${docs.length} documents in ${projectId}/${dataset}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
