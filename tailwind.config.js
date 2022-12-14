/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite'
      },

      fontFamily: {
        burtons: 'burtons'
      }
    }
  },
  plugins: []
}
