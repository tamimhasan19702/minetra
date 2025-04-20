/** @format */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}", "./index.html"],
  theme: {
    screens: {
      xs: "361px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "primary-color": "##222222",
        "secondary-color": "#ff3131",
        "third-color": "##F6F4F0",
      },
    },
  },
  plugins: [],
};
