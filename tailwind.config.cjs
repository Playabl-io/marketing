/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts,vue}", "./index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#E6E0E8",
          200: "#CFC4E1",
          300: "#B8A9DA",
          400: "#A18ED3",
          500: "#4622B8",
        },
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        openSans: "'Open Sans', sans-serif",
        spartan: "'Spartan', sans-serif",
        paytone: "'Paytone', sans-serif",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
