import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    minify: true,
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@app": "/src/app",
      "@features": "/src/features",
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
