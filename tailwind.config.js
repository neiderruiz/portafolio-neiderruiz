module.exports = {
  purge:  ["./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
        purple: {
          600: '#BB6BD9',
          700: '#A042C2',
        },
        background: {
          DEFAULT: '#F9FAFF',
        }
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
