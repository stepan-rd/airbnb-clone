/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      filter: {
        'white-filter': 'brightness(0) invert(1)',
        'none-filter': 'none',
      },

      fontFamily: {
        "SF-pro": ["SF pro"]
      }
    },
  },
  plugins: [],
}