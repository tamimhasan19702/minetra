/** @format */

module.exports = {
  content: ["**/*.{html,js}", "**/**/*.{html,js}", "./index.html"],
  darkMode: "class", // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light mode base colors
        "primary-color": "#F6F4F0", // Fixed invalid hex
        "secondary-color": "#0CC0DF",
        "third-color": "#222222",

        // Semantic color tokens for both modes
        "bg-light": "#ffffff",
        "bg-dark": "#111827",

        "text-light": "#111827",
        "text-dark": "#f3f4f6",

        "glass-light": "rgba(255, 255, 255, 0.2)",
        "glass-dark": "rgba(17, 24, 39, 0.3)",

        "border-light": "rgba(255, 255, 255, 0.2)",
        "border-dark": "rgba(255, 255, 255, 0.05)",

        "hover-light": "#f5f5f5",
        "hover-dark": "#1f2937",
      },
      fontFamily: {
        cocomat: ["CocomatPro", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
