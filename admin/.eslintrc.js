module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      rootMode: "upward"
    }
  },
  rules: {
    // TODO these are new as of our Webpack 5 upgrade, making them warnings till we get a handle on them or decide we don't want them
    "react/prop-types": "warn",
    "@calm/react-intl/missing-formatted-message": "warn",
    "@calm/react-intl/missing-attribute": "warn"
  }
};
