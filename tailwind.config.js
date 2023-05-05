/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl' : '6.5rem',
      'large': '12px',
      'full': '9999px',
    },
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

