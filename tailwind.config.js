/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        sans : ['DM Sans', 'sans-serif']
      },
      colors : {
        green : {
          DEFAULT : '#3cc82f'
        },
        gray : {
          600 : '#606060'
        }
      },
      spacing : {
        13 : '3.25rem',
      },
      boxShadow : {
        primary : '0px 9.9px 21.6px rgba(136, 202, 41, 0.41)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
