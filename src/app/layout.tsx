import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { getContent } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const cabinet = localFont({
  src: "./fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-cabinet",
  weight: "100 900",
  display: "swap",
});
const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Variable.woff2", style: "normal" },
    { path: "./fonts/Satoshi-VariableItalic.woff2", style: "italic" },
  ],
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
});
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export async function generateMetadata(): Promise<Metadata> {
  const { profile } = await getContent();
  const title = `${profile.name}, ${profile.role.toLowerCase()}`;
  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s · ${profile.name}` },
    description: profile.tagline,
    authors: [{ name: profile.name, url: siteUrl }],
    alternates: { canonical: "/" },
    openGraph: {
      type: "profile",
      url: siteUrl,
      siteName: profile.name,
      title,
      description: profile.tagline,
      locale: "en_UG",
    },
    twitter: { card: "summary_large_image", title, description: profile.tagline },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

/** Runs before paint so a saved dark theme never flashes light. Light is the default. */
const themeScript = `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cabinet.variable} ${satoshi.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
