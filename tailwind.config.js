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
      },

      minHeight: {
        '9.375rem': '9.375rem', // 12.5rem fits between 48 (12rem) and 56 (14rem)
      },
      minWidth: {
        '9.375rem': '9.375rem', // 12.5rem fits between 48 (12rem) and 56 (14rem)
      },

      maxWidth: {
        '63.75rem': '63.75rem'
      },

      maxHeight: {
        '32.188rem': '32.188rem'
      },

      scale: {
        '102': '1.02'
      },

      fontSize: {
        '10px': '10px'
      },
    },
  },
  plugins: [],
}