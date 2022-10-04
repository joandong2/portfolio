/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   lightBlack: '#5c5c5c',
      // },
    },
    fontFamily: {
      'oswald': ['Oswald', 'sans-serif'],
      'istok': ['Istok Web', 'sans-serif']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1140px',
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}