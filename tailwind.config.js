module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Poppins'],
      'poppins': ['Poppins', 'sans-serif'],
      'montserrat': ['Montserrat\\ Alternates', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
