/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A18A68",
        darkGray: "#707070",
        gray: "#D8D8D8",
        lightGray: "##EFEFEF",
        error: "#D82700"
      },
    fontFamily: {
      allerta: ['Allerta Stencil', 'sans-serif'], 
      dmSans: ['DM Sans', 'sans-serif'],
    }
    },
  },
  plugins: [],
}