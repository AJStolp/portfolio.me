/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  important: true,
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/component-data/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        270: "16.875rem",
      },
      maxWidth: {
        63: "63rem",
      },
      colors: {
        black: "#18191A",
        lightBlack: "#181818",
        darkTopGradient: "#404040",
        darkBottomGradient: "#282828",
        primaryText: "#FFFFFF",
        secondaryText: "#E4E6EB",
        card: "#242526",
      },
    },
  },
  plugins: [Myclass],
  corePlugins: {
    apply: true,
  },
};
