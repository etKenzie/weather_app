module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  rules: {
    indent: ["error", 2],
    // curly: "error",
    // quotes: ["error", "double"],
  },
};
