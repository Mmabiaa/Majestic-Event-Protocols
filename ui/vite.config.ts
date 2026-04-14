import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
    publicDir: "public",
  },
});