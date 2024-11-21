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
      backgroundImage: {
        blog: "url('https://static.vecteezy.com/system/resources/previews/006/409/443/non_2x/adventure-tour-on-the-theme-of-climbing-trekking-hiking-walking-or-vacation-with-forest-and-mountain-views-in-flat-nature-background-poster-illustration-vector.jpg')",
        aboutBg: "url('./src/assets/about.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
