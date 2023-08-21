/** @type { import('@storybook/svelte-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-svelte-csf"
  ],
  framework: {
    name: "@storybook/svelte-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
