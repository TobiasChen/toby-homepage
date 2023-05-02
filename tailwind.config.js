/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'default-background': '#faebd7',
        'default-color' : "#483d8b"
      }
    },
    fontFamily: {
      'default-font' : ['Courier', 'sans-serif']
    }
  },
  plugins: [],
}

