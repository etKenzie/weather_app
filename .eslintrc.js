module.exports = {
  env: {
    node: true,
    commonjs: true,
    browser: true,
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
