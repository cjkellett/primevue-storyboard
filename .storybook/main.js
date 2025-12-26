/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ["./stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/vue3-vite",
  docs: {
    autodocs: "tag",
  },
};
export default config;
