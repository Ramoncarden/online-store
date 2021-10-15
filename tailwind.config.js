module.exports = {
  purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('C:/Users/Deliciouz/Documents/react-projects/online-store/src/assets/marcus-loke-xXJ6utyoSw0-unsplash (1).jpg')"
      },
      fontFamily: {
        logoFont: "'Are You Serious', cursive"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
