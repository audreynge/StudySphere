/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
          'white': '#fff',
          'black': '#000',
          'SS-dark-gray': '#BABABA',
          'SS-purple': '#BD74C9',
          'SS-green': '#88B28C',
          'SS-lightgreen': '#DEFFDF',
          'SS-lightestgreen': '#EAFFE8',
          'SS-black': '#202020',
          'SS-gray': '#E0DADA',
      },
    },
  },
  plugins: [],
}

