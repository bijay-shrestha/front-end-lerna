"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _CBreadcrumb = _interopRequireDefault(require("../CBreadcrumb"));

expect.addSnapshotSerializer(enzymeSerializer);
describe('CBreadcrumb component tests', function () {
  var wrapper, instance;
  var dataForBreadCrumb = [{
    id: '1',
    name: 'Home',
    path: '/home'
  }, {
    id: '2',
    name: 'General Setup',
    path: '/generalSetup'
  }];

  var setWrapperProps = function setWrapperProps(cWrapper, propsObject) {
    cWrapper.setProps(propsObject);
  };

  describe('Breadcrumb Component Tests', function () {
    beforeEach(function () {
      wrapper = shallow(_react["default"].createElement(_CBreadcrumb["default"].WrappedComponent, null));
      setWrapperProps(wrapper, {
        breadcrumbData: []
      });
    });
    test('if CBreadcrumb component is defined', function () {
      expect(wrapper).toBeDefined();
    });
    test('if renders Breadcrumb component', function () {
      expect(wrapper.find('Breadcrumb').length).toEqual(1);
    });
    test('if Breadcrumb component contains all required props', function () {
      var propRequired = ['as', 'label', 'listProps', 'bsPrefix', 'children'];
      var propsAvailableForBreadcrumb = Object.keys(wrapper.find('Breadcrumb').props());
      propRequired.forEach(function (propAvail, i) {
        return expect(propAvail).toContain(propsAvailableForBreadcrumb[i]);
      });
    });
  });
  describe('CBreadcrumb state tests', function () {
    beforeEach(function () {
      wrapper = mount(_react["default"].createElement(_CBreadcrumb["default"].WrappedComponent, null));
      instance = wrapper.instance();
      setWrapperProps(wrapper, {
        breadcrumbData: dataForBreadCrumb
      });
    });
    afterAll(function () {
      wrapper.unmount();
    });
    test('if routes state is defined', function () {
      expect(wrapper.state('routes')).toBeDefined();
    });
    test('if currentLocation state is defined', function () {
      expect(wrapper.state('currentLocation')).toBeDefined();
    });
    test('if state`s property currentLocation is set after componentDidMount', function () {
      setWrapperProps(wrapper, {
        location: {
          pathname: '/generalSetup'
        },
        history: {
          location: {
            pathname: ''
          }
        }
      });
      jest.spyOn(instance, 'setCurrentLocation');
      instance.componentDidMount();
      expect(instance.setCurrentLocation).toHaveBeenCalled();
    });
    test('if routes are filtered upto current location and ' + 'state`s property routes is set after componentDidMount ',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // jest.spyOn(instance, 'setRoutes');
              setWrapperProps(wrapper, {
                location: {
                  pathname: '/generalSetup'
                }
              });
              _context.next = 3;
              return instance.componentDidMount();

            case 3:
              // wrapper.update();
              expect(wrapper.state('routes').length).not.toBe(0);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    test('if componentDidUpdate lifecycle will be called and ' + 'routes will be filtered when url changes',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return instance.componentDidUpdate({
                location: {
                  pathname: '/generalSetup'
                },
                history: {
                  location: {
                    pathname: '/home'
                  }
                }
              });

            case 2:
              expect(wrapper.state('routes').length).toBe(1);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
  });
  describe('BreadcrumbItem Component Tests', function () {
    beforeEach(
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              wrapper = shallow(_react["default"].createElement(_CBreadcrumb["default"].WrappedComponent, null));
              instance = wrapper.instance();
              setWrapperProps(wrapper, {
                breadcrumbData: dataForBreadCrumb,
                location: {
                  pathname: '/generalSetup'
                }
              });
              _context3.next = 5;
              return instance.componentDidMount();

            case 5:
              wrapper.update();

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    test('if renders BreadcrumbItem component', function () {
      expect(wrapper.find('#breadcrumbItem1').length).toBe(1);
    });
    test('if BreadcrumbItem component shows name', function () {
      expect(wrapper.find('#breadcrumbItem1').text()).not.toBe('');
    });
    test('if  BreadcrumbItem components except last has href with value', function () {
      expect(wrapper.find('#breadcrumbItem1').prop('href')).not.toBe('');
    });
    test('if last  BreadcrumbItem component  defined', function () {
      expect(wrapper.find('#breadcrumbItem2').length).toBe(1);
    });
    test('if last BreadcrumbItem component has no href', function () {
      expect(wrapper.find('#breadcrumbItem2').prop('href')).not.toBeDefined();
    });
    test('if last BreadcrumbItem component has prop active', function () {
      expect(wrapper.find('#breadcrumbItem2').prop('active')).toBeTruthy();
    });
    test('if BreadcrumbItem  component excluding last contains all required props', function () {
      var propRequired = ['test-id', 'as', 'title', 'target', 'bsPrefix', 'children', 'href'];
      var propsAvailableForBreadcrumbItem = Object.keys(wrapper.find('#breadcrumbItem1').props());
      propRequired.forEach(function (propAvail, i) {
        return expect(propAvail).toContain(propsAvailableForBreadcrumbItem[i]);
      });
    });
    test('if BreadcrumbItem  component including last contains all required props', function () {
      var propRequired = ['test-id', 'as', 'title', 'target', 'bsPrefix', 'children', 'active'];
      var propsAvailableForBreadcrumbItem = Object.keys(wrapper.find('#breadcrumbItem2').props());
      propRequired.forEach(function (propAvail, i) {
        return expect(propAvail).toContain(propsAvailableForBreadcrumbItem[i]);
      });
    });
  });
  describe('Snapshot Testing', function () {
    wrapper = shallow(_react["default"].createElement(_CBreadcrumb["default"].WrappedComponent, {
      breadcrumbData: dataForBreadCrumb
    }));
    test('if renders CBreadcrumb component correctly', function () {
      expect(wrapper).toMatchSnapshot();
    });
  });
});