// postcss.config.js
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./hugo_stats.json"],
  whitelist: [],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements;
    return els.tags.concat(els.classes, els.ids);
  },
});

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./assets/css/postcss/tailwind.config.js"),
    require("autoprefixer"),
    ...(process.env.HUGO_ENVIRONMENT === "production"
      ? [require("postcss-pxtorem")]
      : []),
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [purgecss] : []),
    ...(process.env.HUGO_ENVIRONMENT === "production"
      ? [require("cssnano")]
      : []),
    ...(process.env.HUGO_ENVIRONMENT === "development"
      ? [require("postcss-browser-reporter")]
      : []),
  ],
};
