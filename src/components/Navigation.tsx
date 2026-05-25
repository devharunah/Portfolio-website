"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kakooza-harunah-701882350/" },
  { label: "Instagram", href: "https://www.instagram.com/kakooza_harunah/" },
  { label: "GitHub", href: "https://github.com/devharunah" },
];

const cubicBezier: [number, number, number, number] = [0.76, 0, 0.24, 1];

const overlayVariants: Variants = {
  closed: {
    clipPath: "circle(0px at 28px 28px)",
    transition: { duration: 0.55, ease: cubicBezier },
  },
  open: {
    clipPath: "circle(200vmax at 28px 28px)",
    transition: { duration: 0.65, ease: cubicBezier },
  },
};

function linkAnimate(isOpen: boolean, i: number) {
  return isOpen
    ? { opacity: 1, y: 0, transition: { delay: i * 0.08 + 0.35, duration: 0.4 } }
    : { opacity: 0, y: 24 };
}

function socialAnimate(isOpen: boolean, i: number) {
  return isOpen
    ? { opacity: 1, y: 0, transition: { delay: i * 0.07 + 0.5, duration: 0.35 } }
    : { opacity: 0, y: 12 };
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function handleNavClick(href: string) {
    setIsOpen(false);
    setTimeout(() => router.push(href), 300);
  }

  return (
    <>
      {/* Hamburger / Close button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        style={{ zIndex: 100 }}
        className="fixed top-6 left-6 flex flex-col justify-center items-center w-10 h-10 cursor-pointer bg-transparent border-0 outline-none"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
              className="text-white text-2xl font-light leading-none select-none"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ✕
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-[5px]"
            >
              <span className="block w-6 h-[1.5px]" style={{ backgroundColor: "var(--foreground)" }} />
              <span className="block w-6 h-[1.5px]" style={{ backgroundColor: "var(--foreground)" }} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Full-screen overlay */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={overlayVariants}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          backgroundColor: "var(--menu-bg)",
          display: "flex",
          alignItems: "center",
          padding: "0 10vw",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "4rem",
          }}
        >
          {/* Nav links */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={linkAnimate(isOpen, i)}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  fontWeight: 600,
                  color: "#ffffff",
                  lineHeight: 1.1,
                  padding: 0,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#097969";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          {/* Socials */}
          <div style={{ paddingTop: "0.75rem" }}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={socialAnimate(isOpen, 0)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#6b7280",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Socials
            </motion.p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {socialLinks.map((s, i) => (
                <motion.a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={socialAnimate(isOpen, i + 1)}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "#ffffff",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#097969";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                  }}
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
