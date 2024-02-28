let config;

if (process.env.REACT_APP_ENV === "local") {
  config = require("./config.local");
} else if (process.env.REACT_APP_ENV === "staging") {
  config = require("./config.staging");
} else if (process.env.REACT_APP_ENV === "production") {
  config = require("./config.production");
} else {
  config = require("./config.local");
}

module.exports = config;
