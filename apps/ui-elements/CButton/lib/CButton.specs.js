"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _CButton = _interopRequireDefault(require("./CButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('CButton', function () {
  test('renders correctly', function () {
    var tree = _reactTestRenderer["default"].create(_react["default"].createElement(_CButton["default"], null, 'Test')).toJSON();

    expect(tree).toMatchSnapshot();
  });
});