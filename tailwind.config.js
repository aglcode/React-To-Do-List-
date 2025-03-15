import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#2c1740",
        bg: "#e7e7e9",
        primary: "#1cbcca",
        secondary: "#03959f",
      },
    },
  },
  plugins: [
    daisyui
  ],
}

