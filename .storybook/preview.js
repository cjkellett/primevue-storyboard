import { setup } from "@storybook/vue3";
import PrimeVue from "primevue/config";
import MyCustomPreset from "../src/theme";
import "../src/style.css";
import "primeicons/primeicons.css";
import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/600.css";
import "@fontsource/titillium-web/700.css";
import "./storybook.css";

// Configure PrimeVue globally for all stories
setup((app) => {
  app.use(PrimeVue, {
    theme: {
      preset: MyCustomPreset,
    },
  });
});

/** @type { import('@storybook/vue3-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
