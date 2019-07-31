"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _CInputGroupAppend = _interopRequireDefault(require("./CInputGroupAppend"));

var _CInputGroupPrepend = _interopRequireDefault(require("./CInputGroupPrepend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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