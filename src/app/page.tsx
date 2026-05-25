"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Navigation />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hero-container"
      >
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          style={{
            flexShrink: 0,
            width: 160,
            height: 160,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/harunah2025.jpg"
            alt="Kakooza Harunah"
            width={160}
            height={160}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            priority
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="hero-text"
        >
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 700,
              color: "#0a0a0a",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Kakooza Harunah
          </h1>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.2rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "#6b7280",
                margin: 0,
              }}
            >
              Co-Founder at{" "}
              <a
                href="https://myummah.co/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#6b7280", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#097969")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#6b7280")
                }
              >
                MyUmmah
              </a>
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "#6b7280",
                margin: 0,
              }}
            >
              Software Developer at{" "}
              <a
                href="https://aarondouglas.us/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#6b7280", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#097969")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#6b7280")
                }
              >
                Aaron Douglas
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
