/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '600px'}, // 0 to 600px
        'sm': {'min': '601px', 'max': '900px'}, // 601px to 900px
        'md': '901px', // 901px and above
      },
    },
  },
  plugins: [],
}
