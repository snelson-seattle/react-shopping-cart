/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "cart-item-sm": "4fr 3fr 1fr 1fr",
        "cart-item-md": "3fr 15fr 5fr 1fr 8fr 1fr", 
      }
    },
  },
  plugins: [],
}
