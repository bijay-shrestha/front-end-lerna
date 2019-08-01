"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _CInputGroupAppend = _interopRequireDefault(require("./CInputGroupAppend"));

var _CInputGroupPrepend = _interopRequireDefault(require("./CInputGroupPrepend"));

var CInputGroup = function CInputGroup(props) {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactBootstrap.InputGroup, {
    className: props.classes,
    id: props.id,
    as: props.as,
    bsPrefix: props.bsPrefix,
    size: props.size
  }, props.prepend ? _react["default"].createElement(_CInputGroupPrepend["default"], {
    id: "prepend" + props.id,
    className: props.appendClassName,
    prepend: props.prepend
  }) : null, props.append ? _react["default"].createElement(_CInputGroupAppend["default"], {
    id: "append" + props.id,
    className: props.prependClassName,
    append: props.append
  }) : null));
};

var _default = (0, _react.memo)(CInputGroup);

exports["default"] = _default;