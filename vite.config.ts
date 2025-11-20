import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    // Use relative paths for GitHub Pages project sites
    base: "./",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      // Only include Lovable componentTagger in development
      isDev && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
