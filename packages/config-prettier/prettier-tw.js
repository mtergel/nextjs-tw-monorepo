const base = require("./prettier-base");

/*
 * Use this config if you are using tailwind in your project.
 * You can extend it on your own project
 */

/** @type {import("prettier").Config} */
module.exports = {
  ...base,
  plugins: [...base["plugins"], "prettier-plugin-tailwindcss"],
  tailwindFunctions: ["clsx", "cn", "cva"],
};
