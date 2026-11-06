import { defineQuery } from "next-sanity";

/*
 * Queries project Sanity documents straight into the shapes in src/lib/types.ts,
 * so components never see Sanity's raw structure.
 */

const img = /* groq */ `{
  "src": asset->url,
  "alt": coalesce(alt, ""),
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height,
  "lqip": asset->metadata.lqip
}`;

const richBody = /* groq */ `[]{
  ...,
  _type == "image" => { ..., "src": asset->url, "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height }
}`;

export const SITE_QUERY = defineQuery(`{
  "profile": *[_type == "profile"][0]{
    name,
    role,
    tagline,
    "location": coalesce(location, ""),
    "status": coalesce(status, ""),
    "bio": coalesce(bio, []),
    "skills": coalesce(skills[]{label, "items": coalesce(items, [])}, []),
    "photo": photo${img},
    "email": coalesce(email, ""),
    "resumeUrl": resume.asset->url,
    "socials": coalesce(socials[]{label, href}, [])
  },
  "projects": *[_type == "project" && defined(slug.current)] | order(order asc, _createdAt desc){
    "slug": slug.current,
    title,
    "tagline": coalesce(tagline, ""),
    "period": coalesce(period, ""),
    "role": coalesce(role, ""),
    "category": coalesce(category, "other"),
    "featured": coalesce(featured, false),
    "order": coalesce(order, 100),
    "problem": coalesce(problem, ""),
    "impact": coalesce(impact, []),
    "stack": coalesce(stack, []),
    "cover": cover${img},
    "gallery": coalesce(gallery[]${img}, []),
    liveUrl,
    repoUrl,
    "body": coalesce(body${richBody}, [])
  },
  "experience": *[_type == "experience"] | order(order asc){
    "id": _id,
    role,
    company,
    url,
    "period": coalesce(period, ""),
    "order": coalesce(order, 100),
    "summary": coalesce(summary, ""),
    "highlights": coalesce(highlights, []),
    "stack": coalesce(stack, [])
  },
  "talks": *[_type == "talk"] | order(_createdAt desc){
    "id": _id,
    title,
    event,
    "date": coalesce(date, ""),
    "summary": coalesce(summary, ""),
    url,
    "photo": photo${img}
  }
}`);
