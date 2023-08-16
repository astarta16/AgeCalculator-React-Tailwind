/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "hsl(259, 100%, 65%)",
        red: "hsl(0, 100%, 67%)",
        white: "hsl(0, 0%, 100%)",
        smokeyGrey: "hsl(0, 1%, 44%)",
        black: "hsl(0, 0%, 8%)",
        grey: "#716F6F",
      },
      
    },
  },
  plugins: [],
}