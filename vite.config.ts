import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: "/resources" }],
  },
  plugins: [
    laravel({
      input: [
        "resources/css/auth.css",
        "resources/js/auth.js",
        "resources/ts/app.tsx",
      ],
      refresh: true,
    }),
    react(),
  ],
});
