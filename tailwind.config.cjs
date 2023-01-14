/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "cart-item": "4fr 3fr 1fr 1fr" 
      }
    },
  },
  plugins: [],
}
