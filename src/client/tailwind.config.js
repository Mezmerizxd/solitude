const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'accent-light': '#D9FF4B',
        'accent-dark': '#BDDE43',
        background: '#1C1C1C',
        'background-light': '#303030',
        'background-dark': '#0B0B0B',
        'white-light': '#ECECEC',
        'white-dark': '#CCCCCC',
      },
      fontFamily: {
        racing: ['Racing Sans One', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './src/index.html', '../../node_modules/flowbite-react/lib/esm/**/*.js'],
};
