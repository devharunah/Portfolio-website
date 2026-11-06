"use client";

/**
 * Sanity Studio, mounted at /studio by src/app/studio/[[...tool]]/page.tsx.
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { singletonTypes, structure } from "./src/sanity/structure";

export default defineConfig({
  name: "portfolio",
  title: "Portfolio",
  basePath: "/studio",
  projectId: projectId || "unconfigured",
  dataset,
  schema: {
    types: schemaTypes,
    // No "create new profile": there is exactly one.
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (actions, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? actions.filter(({ action }) => action && ["publish", "discardChanges", "restore"].includes(action))
        : actions,
  },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
