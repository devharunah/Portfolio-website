"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        padding: "6rem 10vw 4rem",
      }}
    >
      <Navigation />

      {/* Header */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "#0a0a0a",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Portfolio
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            color: "#6b7280",
            marginTop: "0.4rem",
          }}
        >
          Projects I have worked on
        </p>
      </div>

      {/* Divider above list */}
      <div style={{ borderTop: "1px solid #e5e7eb", marginBottom: 0 }} />

      {/* Project list */}
      <div>
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            style={{ textDecoration: "none", display: "block" }}
          >
            <div
              className="project-row"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "2rem",
                padding: "2rem 0",
                borderBottom: "1px solid #e5e7eb",
              }}
              onMouseEnter={(e) => {
                const name = (e.currentTarget as HTMLDivElement).querySelector<HTMLElement>(".card-name");
                if (name) name.style.color = "#097969";
              }}
              onMouseLeave={(e) => {
                const name = (e.currentTarget as HTMLDivElement).querySelector<HTMLElement>(".card-name");
                if (name) name.style.color = "#0a0a0a";
              }}
            >
              {/* Name + tagline */}
              <div style={{ flex: 1 }}>
                <h2
                  className="card-name"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 600,
                    color: "#0a0a0a",
                    margin: 0,
                    lineHeight: 1.15,
                    transition: "color 0.2s",
                  }}
                >
                  {project.name}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "#6b7280",
                    margin: 0,
                    marginTop: "0.3rem",
                  }}
                >
                  {project.tagline}
                </p>
              </div>

              {/* Year — fixed width so it sits close and consistent */}
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "#9ca3af",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                  paddingTop: "0.35rem",
                }}
              >
                {project.year}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
