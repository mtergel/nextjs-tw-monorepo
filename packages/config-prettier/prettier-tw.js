/** @type {import("prettier").Config} */
module.exports = {
  ...require("./prettier-base"),
  plugins: ["prettier-plugin-tailwindcss"],
};
