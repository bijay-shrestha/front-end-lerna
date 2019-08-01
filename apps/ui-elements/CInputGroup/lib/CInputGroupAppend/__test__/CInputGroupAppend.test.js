"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _CInputGroupAppend = _interopRequireDefault(require("../CInputGroupAppend"));

var _reactBootstrap = require("react-bootstrap");

expect.addSnapshotSerializer(enzymeSerializer);
describe('CInputGroupAppend', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = mount(React.createElement(_CInputGroupAppend["default"], {
      id: "appendinputGroup",
      classes: "hello",
      append: ''
    }));
  });
  afterEach(function () {
    wrapper.unmount();
  });
  it('should be defined', function () {
    expect(wrapper).toBeDefined();
  });
  it('should have given props available', function () {
    var propsForAppend = ['id', 'classes', 'append'];
    var appendPropsAv = Object.keys(wrapper.props());
    propsForAppend.map(function (propsForApp, i) {
      expect(propsForAppend).toContain(appendPropsAv[i]);
    });
  });
  it('should have atleast one element of input inside append element', function () {
    var a = [React.createElement(_reactBootstrap.InputGroup.Text, {
      key: "addon-1",
      id: "basic-addon3"
    }, "https://example.com/users/"), React.createElement(_reactBootstrap.Button, {
      key: "button2",
      id: "buton2",
      variant: "outline-secondary"
    }, "Button")];
    wrapper.setProps({
      append: a
    });
    expect(wrapper.find('#basic-addon3').length).toBeGreaterThan(1);
  });
  describe('Snapshot testing', function () {
    it('should match the previous snapshot', function () {
      expect(wrapper).toMatchSnapshot();
    });
  });
});