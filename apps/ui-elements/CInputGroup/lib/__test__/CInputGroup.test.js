"use strict";

var _CInputGroup = _interopRequireDefault(require("../CInputGroup"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

expect.addSnapshotSerializer(enzymeSerializer);
describe('InputGroup Test', function () {
  var wrapper, wrapper1;
  beforeEach(function () {
    wrapper = mount(React.createElement(_CInputGroup["default"], {
      id: "inputGroup"
    }));
    wrapper1 = shallow(React.createElement(_CInputGroup["default"], {
      id: "inputGroup"
    }));
  });
  afterEach(function () {
    wrapper.unmount();
  });
  it('should render sucessfully', function () {
    expect(wrapper1).toBeDefined();
  });
  it('should have only one input group component', function () {
    expect(wrapper1.find('#inputGroup')).toHaveLength(1);
  });
  it('should have given props available', function () {
    var propsAvailable = ['id', 'className', 'as', 'size', 'bsPrefix', 'children'];
    var propsOfInputgroup = Object.keys(wrapper.children().props());
    propsAvailable.map(function (propsA, index) {
      expect(propsAvailable).toContain(propsOfInputgroup[index]);
    });
  });
  it('should have only one prepend input group element if provided', function () {
    var p = [React.createElement(_reactBootstrap.InputGroup.Text, {
      key: "addon-1",
      id: "basic-addon3"
    }, "https://example.com/users/"), React.createElement(_reactBootstrap.Button, {
      key: "button2",
      id: "buton2",
      variant: "outline-secondary"
    }, "Button")];
    wrapper1.setProps({
      prepend: p
    });
    expect(wrapper1.find('#prependinputGroup')).toHaveLength(1);
  });
  it('should have only one append input group element if provided', function () {
    var a = [React.createElement(_reactBootstrap.InputGroup.Text, {
      key: "addon-1",
      id: "basic-addon3"
    }, "https://example.com/users/"), React.createElement(_reactBootstrap.Button, {
      key: "button2",
      id: "buton2",
      variant: "outline-secondary"
    }, "Button")];
    wrapper1.setProps({
      append: a
    });
    expect(wrapper1.find('#appendinputGroup')).toHaveLength(1);
  });
  describe('Snapshot testing', function () {
    it('should match the previous snapshot', function () {
      expect(wrapper).toMatchSnapshot();
    });
  });
});