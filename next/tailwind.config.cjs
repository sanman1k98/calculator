/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      calcOrange: {
        100: "#FF9500",
        200: "#ffd36e",
      },
      calcGray: {
        100: "#7c7c7c",
        300: "#606060",
        400: "#4c4c4c",
        700: "#ebebeb",
      }
    },
    extend: {},
  },
  plugins: [],
};
