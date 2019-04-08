"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cjs/react-router-tabs.min.js");
} else {
  module.exports = require("./cjs/react-router-tabs.js");
}
