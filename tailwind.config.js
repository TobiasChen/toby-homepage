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
        'default-font' : "#483d8b"
      }
    },
  },
  plugins: [],
}

