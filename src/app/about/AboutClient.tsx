"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const jokes = [
  "I once spent 4 hours debugging. The issue was a missing comma. We don't talk about it.",
  "Kawa was partly built out of a personal need to find good coffee in Kampala. The search continues.",
  "I deploy to production on Fridays. Intentionally. It has only gone wrong twice. Okay, three times.",
  "My code works on the first try roughly 0% of the time. My confidence remains unaffected.",
];

const building = [
  {
    name: "MyUmmah",
    role: "Co-Founder & CTO",
    description:
      "A Muslim super-app built for Uganda — digitalising Zakat payments, Aqiqah, Iftar sponsorships, and verified Hajj & Umrah access. Everything a Muslim in Uganda needs, in one place.",
    href: "https://myummah.co/",
    year: "2026 – Present",
  },
  {
    name: "Kawa",
    role: "Developer",
    description:
      "A coffee marketplace connecting farmers, suppliers, cafés, and companies across the coffee industry with buyers. Built to simplify sourcing and selling around coffee.",
    href: "https://kawacoffee.app/",
    year: "2025 – Present",
  },
  {
    name: "Haru Digital Solutions",
    role: "CEO & Founder",
    description:
      "A digital agency delivering websites, mobile apps, and brand design for clients across Uganda and beyond. A small team, sharp execution.",
    href: null,
    year: "2025 – Present",
  },
];

export default function AboutClient() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        padding: "6rem 10vw 6rem",
      }}
    >
      <Navigation />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        style={{ maxWidth: "680px" }}
      >
        {/* Hero heading */}
        <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#0a0a0a",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Hey, I&apos;m Kakooza Harunah.
          </h1>
        </motion.div>

        {/* Bio */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          style={{ marginTop: "2rem" }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "#374151",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            I&apos;m a Software Developer and tech entrepreneur based in{" "}
            <span style={{ color: "#0a0a0a", fontWeight: 600 }}>
              Kampala, Uganda
            </span>
            , building digital products that solve real problems for real
            communities. I work across the full stack — TypeScript, React,
            Next.js, Node.js, PostgreSQL — and I ship end-to-end, from the
            first design decision to the final deployment.
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "#374151",
              lineHeight: 1.8,
              margin: 0,
              marginTop: "1.25rem",
            }}
          >
            I currently work as a Software Developer at{" "}
            <a
              href="https://aarondouglas.us/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#097969",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.7")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
              }
            >
              Aaron Douglas
            </a>{" "}
            (remote, Chicago), while co-founding{" "}
            <a
              href="https://myummah.co/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#097969",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.7")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
              }
            >
              MyUmmah
            </a>{" "}
            and building{" "}
            <a
              href="https://kawacoffee.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#097969",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.7")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
              }
            >
              Kawa
            </a>
            . I also run{" "}
            <span style={{ color: "#0a0a0a", fontWeight: 500 }}>
              Haru Digital Solutions
            </span>
            , a small digital agency where I lead a team delivering websites,
            mobile apps, and brand work for clients across Uganda and abroad.
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "#374151",
              lineHeight: 1.8,
              margin: 0,
              marginTop: "1.25rem",
            }}
          >
            Outside of code, I enjoy connecting with developers at tech events
            and share tech content on TikTok, Instagram, and YouTube. I&apos;m
            open to relocation and always up for interesting problems.
          </p>
        </motion.div>

        {/* Currently building */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          style={{ marginTop: "3.5rem" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#0a0a0a",
              margin: 0,
              marginBottom: "0.4rem",
            }}
          >
            Currently building
          </h2>
          <div style={{ borderTop: "1px solid #e5e7eb", marginBottom: "0" }} />

          <div style={{ display: "flex", flexDirection: "column" }}>
            {building.map((item) => (
              <div
                key={item.name}
                style={{
                  padding: "1.5rem 0",
                  borderBottom: "1px solid #e5e7eb",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "1.5rem",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "#0a0a0a",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLAnchorElement).style.color =
                            "#097969")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLAnchorElement).style.color =
                            "#0a0a0a")
                        }
                      >
                        {item.name}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "#0a0a0a",
                        }}
                      >
                        {item.name}
                      </span>
                    )}
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.78rem",
                        color: "#097969",
                        backgroundColor: "#f0faf7",
                        padding: "0.15rem 0.55rem",
                        borderRadius: "999px",
                      }}
                    >
                      {item.role}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      color: "#6b7280",
                      margin: 0,
                      lineHeight: 1.65,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    color: "#9ca3af",
                    flexShrink: 0,
                    paddingTop: "0.2rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fun section */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          style={{ marginTop: "3.5rem" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#0a0a0a",
              margin: 0,
              marginBottom: "1.25rem",
            }}
          >
            A few honest things
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}
          >
            {jokes.map((joke, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "#097969",
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    flexShrink: 0,
                    marginTop: "0.05rem",
                  }}
                >
                  —
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    color: "#6b7280",
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  {joke}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
