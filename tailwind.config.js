 module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      backgroundImage: theme => ({
        'hero-mob': "url('/public/images/image-header-mobile.jpg')",
        'hero-dsk': "url('/public/images/image-header-desktop.jpg')"
      }),
      colors: {
        mg: {
          primary: "#AA5CDA"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
