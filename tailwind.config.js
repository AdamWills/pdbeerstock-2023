/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "brand-maroon": "#721b12",
        "brand-yellow": "#F4B11A",
        "brand-green": "#8A9D3A",
      },
    },
    fontFamily: {
      sans: ["Jost", "sans-serif"],
    },
  },
  plugins: [],
};
