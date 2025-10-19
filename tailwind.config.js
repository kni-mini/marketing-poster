/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "kni-dark": "#3d4049",
        "kni-medium": "#454856",
        "kni-light": "#525564",
        "kni-accent": "#A8BCE5",
      },
      aspectRatio: {
        "a3-landscape": "1.414",
      },
      blur: {
        "3xl": "64px",
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
  plugins: [],
};
