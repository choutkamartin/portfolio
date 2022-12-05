const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#438e96",
          50: "#f2f9f9",
          100: "#ddeff0",
          200: "#bfe0e2",
          300: "#92cace",
          400: "#5faab1",
          500: "#438e96",
          600: "#3b757f",
          700: "#356169",
          800: "#325158",
          900: "#2d464c",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", ...fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
