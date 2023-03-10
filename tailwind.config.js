const { off } = require('process');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#14151F',
        white: '#EDF2F4',
        darkBlue: '#2B2D42',
        red: '#D90429',
        lightRed: '#EF233',
        coolGray: '#8D99AE',
      },
      fontFamily: {
        sans: ['Satoshi', 'Sora', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        satoshiL: ['Satoshi-Light', 'sans-serif'],
        satoshiM: ['Satoshi-Medium', 'sans-serif'],
        satoshiB: ['Satoshi-Bold', 'sans-serif'],
        satoshiBlack: ['Satoshi-Black', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-2slow': 'spin 30s revert infinite',
      },
    },
  },
  plugins: [],
};
