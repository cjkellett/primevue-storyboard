/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ["../storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/vue3-vite",
};
export default config;
