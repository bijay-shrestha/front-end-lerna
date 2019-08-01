"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var CInputGroupAppend = function CInputGroupAppend(_ref) {
  var id = _ref.id,
      classes = _ref.classes,
      append = _ref.append;
  return _react["default"].createElement(_reactBootstrap.InputGroup.Append, {
    id: id,
    className: classes
  }, append && append.map(function (ap, index) {
    return ap;
  }));
};

var _default = (0, _react.memo)(CInputGroupAppend);

exports["default"] = _default;