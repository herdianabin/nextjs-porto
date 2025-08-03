import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // agar bisa di-export jadi static HTML
  images: {
    unoptimized: true, // matikan image optimization untuk export
  },
  trailingSlash: true, // penting agar routing cocok di GitHub Pages
  basePath: "/nextjs-porto", // ganti dengan nama repo GitHub kamu
};

export default nextConfig;
