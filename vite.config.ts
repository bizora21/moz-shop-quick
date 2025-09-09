import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    port: 8080
  },
  plugins: [react({
    jsxImportSource: "react"
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["lovable-tagger"]
  },
  esbuild: {
    jsx: "automatic"
  },
  build: {
    target: "esnext"
  }
});
