/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playFair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        merienda: ["Merienda", "cursive"],
      },
      colors: {
        primary: "#F2C94C",
        darkPri: "#E0A800",
        secondary: "#B8E1B4",
      },
    },
  },
  plugins: [require("daisyui")],
};
