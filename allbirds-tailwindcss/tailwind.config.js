const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
        green: colors.green,
        gray: colors.trueGray,
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
