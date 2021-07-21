module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // 기본
        primary: "#1DA1F2",
        // 클릭시 hover
        dark: "#1a91da",
        // 못누르는
        light: "#a5d0f5",
        // 클릭시 hover
        lighter: "#D4E5F4"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
