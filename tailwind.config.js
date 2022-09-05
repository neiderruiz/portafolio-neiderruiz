module.exports = {
  purge: ["./src/**/*.ts", "./src/**/*.tsx", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          600: "#BB6BD9",
          650: "#B900FF",
          700: "#A042C2",
        },
        red: {
          600: "#D96B85",
        },
        background: {
          DEFAULT: "#F9FAFF",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
