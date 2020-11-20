module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-indent": [2, 4],
    "react/jsx-indent-props": [2, 4],
    "import/no-extraneous-dependencies": "off",
    quotes: [2, "double"],
    indent: [2, 4],
  },
};
