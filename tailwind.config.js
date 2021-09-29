module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandBlue: 'rgb(0, 102, 204)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
