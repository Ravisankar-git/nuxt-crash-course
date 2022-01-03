module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    "vue/multi-word-component-names": "off",
    quotes: [0, "double"],
    // "comma-dangle": [2, "always-multiline"],
    skipBlankLines: "off",
    "space-before-blocks": "off",
    quotes: "off",
  },
};
