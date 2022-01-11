/* config-overrides.js */
const rewireAntd = require("react-app-rewire-antd");

module.exports = function override(config, env) {
  // ...

  config = rewireAntd({
    "@primary-color": "rgb(255,255,255)",
  })(config, env);

  // ...

  return config;
};
