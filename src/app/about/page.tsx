import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About | Kakooza Harunah",
  description:
    "Kakooza Harunah is a Software Developer and tech entrepreneur based in Kampala, Uganda. Co-Founder & CTO of MyUmmah and building Kawa — a coffee marketplace. Full-stack developer specialising in TypeScript, React, and Next.js.",
  keywords: [
    "Kakooza Harunah",
    "Software Developer Uganda",
    "Kampala developer",
    "MyUmmah",
    "Kawa coffee marketplace",
    "full-stack developer Uganda",
    "React developer Uganda",
    "Next.js developer",
    "tech entrepreneur Uganda",
    "Haru Digital Solutions",
  ],
  openGraph: {
    title: "About | Kakooza Harunah — Software Developer & Tech Entrepreneur",
    description:
      "Software Developer and tech entrepreneur based in Kampala, Uganda. Building MyUmmah and Kawa.",
    type: "profile",
    locale: "en_UG",
    url: "https://kakooza-harunah.vercel.app/about",
    siteName: "Kakooza Harunah",
  },
  twitter: {
    card: "summary",
    title: "About | Kakooza Harunah",
    description:
      "Software Developer and tech entrepreneur based in Kampala, Uganda.",
  },
  alternates: {
    canonical: "https://kakooza-harunah.vercel.app/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
