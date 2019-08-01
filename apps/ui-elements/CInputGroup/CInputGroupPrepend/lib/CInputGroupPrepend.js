"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var CInputGroupPrepend = function CInputGroupPrepend(_ref) {
  var id = _ref.id,
      classes = _ref.classes,
      prepend = _ref.prepend;
  return _react["default"].createElement(_reactBootstrap.InputGroup.Prepend, {
    id: id,
    className: classes
  }, prepend && prepend.map(function (pp, index) {
    return pp;
  }));
};

var _default = (0, _react.memo)(CInputGroupPrepend);

exports["default"] = _default;