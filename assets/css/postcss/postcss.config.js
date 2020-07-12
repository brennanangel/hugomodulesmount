module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./assets/css/postcss/tailwind.config.js"),
    require("autoprefixer"),
  ],
};
