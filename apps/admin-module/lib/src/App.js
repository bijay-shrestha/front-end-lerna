"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _logo = _interopRequireDefault(require("./logo.svg"));

require("./App.css");

var _cButton = _interopRequireDefault(require("@cogent/c-button"));

function App() {
  return _react.default.createElement("div", {
    className: "App"
  }, _react.default.createElement("header", {
    className: "App-header"
  }, _react.default.createElement("img", {
    src: _logo.default,
    className: "App-logo",
    alt: "logo"
  }), _react.default.createElement("p", null, "Edit ", _react.default.createElement("code", null, "src/App.js"), " and save to reload."), _react.default.createElement(_cButton.default, null, "Bijay")));
}

var _default = App;
exports.default = _default;