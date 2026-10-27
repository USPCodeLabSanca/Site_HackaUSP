import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF é bem menor que WebP; o navegador recebe WebP se não suportar AVIF
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Coloca o CSS inline no HTML para não bloquear a renderização inicial
    inlineCss: true,
  },
};

export default nextConfig;
