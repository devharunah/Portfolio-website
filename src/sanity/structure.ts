import type { StructureResolver } from "sanity/structure";

/** Profile is a singleton: one fixed document instead of a list. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Profile")
        .id("profile")
        .child(S.document().schemaType("profile").documentId("profile")),
      S.divider(),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("experience").title("Experience"),
      S.documentTypeListItem("talk").title("Talks"),
    ]);

export const singletonTypes = new Set(["profile"]);
