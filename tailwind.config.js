module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: (theme) => ({
        "service-box-web": "40px 40px 5px 40px",
        "service-box-mobile": "30px 30px 5px 5px",
        "service-box-ui": "40px 40px 40px 5px",
        "service-box-machine": "40px 5px 40px 40px",
        "service-box-automation": "5px 5px 40px 40px",
        "service-box-branding": "5px 40px 40px 40px"
      }),
    },
    fontFamily: {
      sans: ["Poppins"],
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat\\ Alternates", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
