"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _Dropdown = _interopRequireDefault(require("react-bootstrap/Dropdown"));

var CDropdown =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CDropdown, _React$Component);

  function CDropdown() {
    (0, _classCallCheck2["default"])(this, CDropdown);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CDropdown).apply(this, arguments));
  }

  (0, _createClass2["default"])(CDropdown, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_Dropdown["default"], null, _react["default"].createElement(_Dropdown["default"].Toggle, {
        variant: "success",
        id: "dropdown-basic"
      }, "Dropdown Button"), _react["default"].createElement(_Dropdown["default"].Menu, null, _react["default"].createElement(_Dropdown["default"].Item, {
        href: "#/action-1"
      }, "Action"), _react["default"].createElement(_Dropdown["default"].Item, {
        href: "#/action-2"
      }, "Another action"), _react["default"].createElement(_Dropdown["default"].Item, {
        href: "#/action-3"
      }, "Something else")));
    }
  }]);
  return CDropdown;
}(_react["default"].Component);

var _default = CDropdown;
exports["default"] = _default;