// next.config.ts
import type { NextConfig } from "next";
const i18n = require("./next-i18next.config").i18n; // ✅ Importa solo el objeto plano

const nextConfig: NextConfig = {
  i18n,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
