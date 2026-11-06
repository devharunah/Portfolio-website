import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  // Old URLs from the previous version of the site keep working.
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/portfolio", destination: "/#work", permanent: true },
      { source: "/portfolio/kawa", destination: "/archive", permanent: true },
      { source: "/portfolio/microbizz", destination: "/archive", permanent: true },
      { source: "/portfolio/mvp-starter-kit", destination: "/archive", permanent: true },
      { source: "/portfolio/:slug", destination: "/work/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
