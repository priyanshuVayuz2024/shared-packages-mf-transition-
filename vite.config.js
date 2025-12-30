import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    lib: {
      entry: "./src/main.jsx",
      name: "anacityMF",
      formats: ["umd"],
      fileName: () => "anacity-shared-bundle.js",
    },
    rollupOptions: {
      external: [],
      output: {
        globals: [],
      },
    },
    cssCodeSplit: false,
    outDir: "dist-standalone",
  },
});
