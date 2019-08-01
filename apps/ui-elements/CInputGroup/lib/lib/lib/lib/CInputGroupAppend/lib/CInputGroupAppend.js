"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

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