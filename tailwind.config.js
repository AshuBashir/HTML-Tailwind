module.exports = {
  purge: {
    enabled: true,
    content: ["src/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'daily-dev-tips': "#F89283" , 
        'white': '#ffffff',
        'purple': '#3f3cbb',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
