import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        border: "hsl(var(--border))",
      },
    },
  },
  plugins: [],
};

export default config;
