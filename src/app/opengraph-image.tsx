import { ImageResponse } from "next/og";
import { getContent } from "@/lib/content";

export const alt = "Kakooza Harunah, full-stack software engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const { profile } = await getContent();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f5f5f4",
          color: "#3d3d3d",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 900, textTransform: "uppercase", lineHeight: 0.9, color: "#0a0a0a", letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 36, color: "#0a0a0a", marginTop: 12 }}>{profile.role}</div>
          <div style={{ fontSize: 28, marginTop: 32, maxWidth: 900, lineHeight: 1.4 }}>{profile.tagline}</div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 22, color: "#0a0a0a" }}>
          <span>Payments</span>
          <span>/</span>
          <span>Machine learning</span>
          <span>/</span>
          <span>3D on the web</span>
        </div>
      </div>
    ),
    size,
  );
}
