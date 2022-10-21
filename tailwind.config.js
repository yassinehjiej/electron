// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#456ed8',
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        'open-sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-pseudo-elements')],
};
