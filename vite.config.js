import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { tailwindThemePlugin } from "./vite-plugins/tailwind-theme.js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindThemePlugin()],
});
