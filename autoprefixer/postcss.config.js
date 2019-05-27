module.exports = {
  syntax: {
    // NOTE: CSS in JS をパースできるように postcss-jsx を syntax として使う
    // see: https://github.com/gucong3000/postcss-jsx
    ...require("postcss-jsx")
  },
  plugins: [
    require("autoprefixer")({
      // see: https://github.com/postcss/autoprefixer#grid-autoplacement-support-in-ie
      grid: "autoplace"
    })
  ]
};
