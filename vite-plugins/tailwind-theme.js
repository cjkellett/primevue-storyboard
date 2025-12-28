import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

/**
 * Vite plugin to auto-generate Tailwind theme CSS from colors.js
 * Regenerates CSS when colors.js changes (restart server to see changes)
 */
export function tailwindThemePlugin() {
  let isGenerating = false;

  async function generateCSS() {
    if (isGenerating) return;
    isGenerating = true;

    try {
      const { generateTailwindThemeCSS } = await import(
        resolve(projectRoot, "src/tailwind.theme.js")
      );
      const css = generateTailwindThemeCSS();
      const outputPath = resolve(projectRoot, "src/tailwind.theme.css");
      writeFileSync(outputPath, css, "utf-8");
    } catch (error) {
      console.warn("Could not generate tailwind.theme.css:", error.message);
    } finally {
      isGenerating = false;
    }
  }

  return {
    name: "tailwind-theme-generator",
    async buildStart() {
      await generateCSS();
    },
    configureServer(server) {
      const colorsPath = resolve(projectRoot, "src/colors.js");

      // Watch colors.js and regenerate CSS on change
      server.watcher.add(colorsPath);
      server.watcher.on("change", async (file) => {
        if (file === colorsPath) {
          await generateCSS();
          console.log("✓ Regenerated tailwind.theme.css from colors.js");
          console.log("  (Restart server to see changes)");
        }
      });

      // Generate on server start
      generateCSS();
    },
  };
}
