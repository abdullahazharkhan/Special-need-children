/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeOrange: '#FFB534',
        themeWhite: "#FBF6EE",
        themeLGreen: "#C1F2B0",
        themeDGreen: "#65B741"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
     }
    },
  },
  plugins: [],
}