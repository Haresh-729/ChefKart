/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sign: ["Libre Baskerville"],
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
