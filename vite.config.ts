import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.svg", "**/*.webp", "**/*.ico"],
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
        chunkFileNames: "chunks/[name]-[hash].js",
        entryFileNames: "[name]-[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.(webp|png|jpe?g|svg)$/.test(name ?? ""))
            return "assets/icons/[name]-[hash][extname]";
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  optimizeDeps: {
    exclude: [],
  },
});