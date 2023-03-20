"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const index$1 = require("./src/anchor/index.js");
const index = {
  install: (app) => {
    app.use(index$1.HpAnchor);
  }
};
exports.HpAnchor = index$1.HpAnchor;
exports.default = index;
