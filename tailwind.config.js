module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'img-footer': 'url("./assets/img/bg-wave.svg")',
      }),
      backgroundColor: (theme) => ({
        footer: '#1DC0AD',
      }),
      height: (theme) => ({
        'footer-bg': '440px',
        hero: '400px',
        'hero-mobile': '280px',
      }),
      borderRadius: (theme) => ({
        '4xl': '30px',
      }),
    },
    fontFamily: {
      sans: ['Poppins'],
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat\\ Alternates', 'sans-serif'],
      'open-sans': ['Open\\ Sans', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
