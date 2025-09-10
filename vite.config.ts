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
    exclude: ["lovable-tagger"]
  },
  esbuild: {
    jsx: "automatic",
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment"
  },
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
