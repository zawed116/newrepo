module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
        amazon_yellow: {
          light: "#FEBE69",
          DEFAULT: "#F3A847",
        },
      },
    },
  },
  plugins: [],
}