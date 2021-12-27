
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/hero-cover.jpg')"
      },
      fontFamily: {
        'sans-serif': ['Poppins', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
    variants: {
      extend: {}
    },
    plugins: []
  }
}
