/**
 * Sanity connection settings. These are public (the dataset is read-only to the
 * public), so NEXT_PUBLIC_ is fine here. Write tokens and webhook secrets are NOT
 * read from this file.
 */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-11-01";

/** False until you create a Sanity project and set NEXT_PUBLIC_SANITY_PROJECT_ID. */
export const isSanityConfigured = /^[a-z0-9-]+$/.test(projectId);
