import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import "../src/globals.css";

const preview: Preview = {
  parameters: {},
  tags: ["autodocs"],
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

export default preview;
