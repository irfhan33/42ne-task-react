/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["HelveticaNowDisplay", "sans-serif"],
        metana: ["NeueMetana", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#87E1C7",
          200: "#419576",
          300: "#21605D",
          400: "#145C08",
        },
        newblack: "#0F0F0F",
        newgray: "#EAEBED",
      },
    },
  },
  plugins: [],
};
