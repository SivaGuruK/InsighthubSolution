// Import necessary modules
const scrollbarHide = require("tailwind-scrollbar-hide");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#2487CE",
        purpleBlue: "#3C38CD",
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "sans-serif"],
      },
      spacing: {
        746: "746px",
        427: "427px",
      },
    },
  },
  plugins: [scrollbarHide, require("@tailwindcss/line-clamp")],
};
