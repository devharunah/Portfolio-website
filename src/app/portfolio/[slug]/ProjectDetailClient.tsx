"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import type { Project } from "@/data/projects";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        padding: "5rem 10vw 6rem",
      }}
    >
      <Navigation />

      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1 }}
        style={{ maxWidth: "720px" }}
      >
        {/* Back link */}
        <motion.div variants={fadeUp} transition={{ duration: 0.4 }}>
          <Link
            href="/portfolio"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "#6b7280",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              marginBottom: "2.5rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#097969")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#6b7280")
            }
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Portfolio
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 700,
            color: "#0a0a0a",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          {project.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.05rem",
            color: "#6b7280",
            marginTop: "0.5rem",
            marginBottom: "2rem",
          }}
        >
          {project.tagline}
        </motion.p>

        {/* Screenshot */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.4 }}
          style={{
            width: "100%",
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: "#f3f4f6",
            marginBottom: "2.5rem",
          }}
        >
          <Image
            src={project.image}
            alt={project.name}
            width={720}
            height={420}
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
        </motion.div>

        {/* Overview */}
        <motion.div variants={fadeUp} transition={{ duration: 0.4 }}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1rem",
              fontWeight: 600,
              color: "#0a0a0a",
              marginBottom: "0.75rem",
            }}
          >
            Overview
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "#374151",
              lineHeight: 1.75,
              maxWidth: "65ch",
            }}
          >
            {project.description}
          </p>
        </motion.div>

        {/* Stats — only if present */}
        {project.stats && project.stats.length > 0 && (
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "2rem",
              marginTop: "2.5rem",
            }}
          >
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    margin: 0,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "#6b7280",
                    margin: 0,
                    marginTop: "0.25rem",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Year */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.4 }}
          style={{ marginTop: "2.5rem" }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#9ca3af",
              margin: 0,
            }}
          >
            Year
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "#0a0a0a",
              marginTop: "0.35rem",
            }}
          >
            {project.year}
          </p>
        </motion.div>

        {/* Link — only if present */}
        {project.link && (
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            style={{ marginTop: "2rem" }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#9ca3af",
                margin: 0,
              }}
            >
              Links
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                marginTop: "0.5rem",
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "#097969",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.75")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
              }
            >
              Visit {project.name} →
            </a>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}
