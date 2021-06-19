module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'img-footer': 'url("./assets/img/background/bg-wave.svg")',
        review: 'url("./assets/img/background/bg-review.svg")',
        map: 'url("./assets/img/background/bg-map.svg")',
      }),
      backgroundColor: (theme) => ({
        footer: '#1DC0AD',
      }),
      width: (theme) => ({
        contactUs: '500px',
      }),
      height: (theme) => ({
        'footer-bg': '440px',
        hero: '400px',
        'hero-mobile': '280px',
        contactUs: '320px',
      }),
      borderRadius: (theme) => ({
        '4xl': '30px',
        'service-box-web': '40px 40px 5px 40px',
        'service-box-mobile': '30px 30px 5px 5px',
        'service-box-ui': '40px 40px 40px 5px',
        'service-box-machine': '40px 5px 40px 40px',
        'service-box-automation': '5px 5px 40px 40px',
        'service-box-branding': '5px 40px 40px 40px',
      }),
      colors: (theme) => ({
        'blue-dark': '#115B76',
        'green-dark': '#1DC0AD',
        'green-light': '#28dac5',
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
