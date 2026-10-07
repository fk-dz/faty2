import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type PluginOption } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function addNojekyll(): PluginOption {
  return {
    name: "add-nojekyll",
    closeBundle() {
      const out = path.resolve(__dirname, "docs");
      if (fs.existsSync(out)) {
        fs.writeFileSync(path.join(out, ".nojekyll"), "");
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: "./", // مسارات نسبية كي يعمل الملف من أي رابط
  plugins: [
    react(),
    tailwindcss(),
    viteSingleFile({ deleteInlinedFiles: true }),
    addNojekyll(),
  ],
  build: {
    outDir: "docs",
    emptyOutDir: true,
    assetsInlineLimit: 1_000_000_000,
    cssCodeSplit: false,
    modulePreload: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
