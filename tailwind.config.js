/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Titillium: ['Titillium Web', 'sans-serif'],
      },
      boxShadow: {
        sl: '0px 3px 10px rgba(0, 0, 0, 0.16);',
      },
      colors: {
        streetlaw: {
          500: '#A0CE57',
        },
      },
      width: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [],
}
