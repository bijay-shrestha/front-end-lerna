"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

var CButton = function CButton(props) {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactBootstrap.Button, {
    id: props.id
  }, props.name));
};

CButton.defaultProps = {
  name: 'Save',
  type: 'button',
  onClickHandler: function onClickHandler() {}
};

var _default = (0, _react.memo)(CButton);

exports["default"] = _default;