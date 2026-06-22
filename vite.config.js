import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // O GitHub Pages publica este projeto em /rumo-a-bolsa/.
  // Em desenvolvimento, a raiz continua sendo "/".
  base: process.env.GITHUB_ACTIONS ? "/rumo-a-bolsa/" : "/",
  plugins: [react()],
});
