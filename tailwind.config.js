/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackCol: "#1C1C1C",
        blackPr: "#6A6A6A",
        blackSe: "#9C9C9C",
        redCol: "#FF7E8B",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
