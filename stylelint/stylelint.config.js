module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-prettier"
  ],
  rules: {
    "function-name-case": ["lower", { ignoreFunctions: ["/\\${.*/"] }],
    "declaration-empty-line-before": null
  }
};
