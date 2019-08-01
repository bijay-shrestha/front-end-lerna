"use strict";

var _CButton = _interopRequireDefault(require("../CButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('CButton Component', function () {
  var wrapper, wrapper1;
  beforeEach(function () {
    wrapper = shallow(React.createElement(_CButton["default"], {
      id: "c-button"
    }));
    wrapper1 = mount(React.createElement(_CButton["default"], {
      id: "c-button"
    }));
  });
  afterEach(function () {
    wrapper1.unmount();
  });
  it('should be defined', function () {
    expect(wrapper).toBeDefined();
  });
  it('should have only one button', function () {
    expect(wrapper.find('#c-button')).toHaveLength(1);
  });
  it('should have show name of button when props name is given', function () {
    wrapper.setProps({
      name: 'Submit'
    });
    expect(wrapper.find('#c-button').text()).toBe('Submit');
  });
  it('should show default name of button when props name is not given', function () {
    expect(wrapper.find('#c-button').text()).toBe('Save');
  });
  it('should have type button when props type is not given', function () {
    expect(wrapper.find('#c-button').prop('type')).toBe('button');
  });
});