"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Breadcrumb = _interopRequireDefault(require("react-bootstrap/Breadcrumb"));

var _reactRouterDom = require("react-router-dom");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CBreadcrumb =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(CBreadcrumb, _PureComponent);

  function CBreadcrumb() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, CBreadcrumb);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(CBreadcrumb)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      routes: [],
      currentLocation: ""
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setCurrentLocation", function (path) {
      _this.setState({
        currentLocation: path
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setRoutes", function (routes) {
      _this.setState({
        routes: routes
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getPathsToInclude", function () {
      var currentLocation = !_this.state.currentLocation ? _this.props.location.pathname : _this.state.currentLocation; // GET AVAILABLE PATHS IN CURRENT PAGE URL

      var pathsToInclude = currentLocation.split('/'); // REMOVE THE FIRST EMPTY ELEMENT FROM ARRAY

      pathsToInclude.shift(); // IF ROUTE IS NOT 'home' ADD 'home' AS FIRST PATH

      pathsToInclude[0] !== "home" && pathsToInclude.unshift("home"); // REMOVE THE END PATHNAME

      pathsToInclude.splice(pathsToInclude.length - 1, 1); //INCLUDE '/' IN EACH PATHNAME

      for (var i = 0; i < pathsToInclude.length; i++) {
        pathsToInclude[i] = "/".concat(pathsToInclude[i]);
      } //FINALLY INCLUDE THE FULL PATH TO CURRENT PAGE


      pathsToInclude.push(currentLocation);
      return pathsToInclude;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "addRoutesByPathsToInclude", function (pathsToInclude) {
      var routes = [];
      pathsToInclude.forEach(function (value) {
        routes = routes.concat(_this.props.breadcrumbData.filter(function (breadCrumb) {
          return breadCrumb.path === value;
        }));
      });
      return routes;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterAndSetRoutesUptoCurrentPage", function () {
      _this.setRoutes(_this.addRoutesByPathsToInclude(_this.getPathsToInclude()));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setCurrentLocationAndFilterRoutes",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(path) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (path) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return _this.setCurrentLocation(_this.props.location.pathname);

              case 3:
                _context.next = 7;
                break;

              case 5:
                _context.next = 7;
                return _this.setCurrentLocation(path);

              case 7:
                _this.filterAndSetRoutesUptoCurrentPage();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "createBreadcrumbLink", function (breadcrumb, index) {
      return index !== _this.state.routes.length - 1 ? {
        'href': "#".concat(breadcrumb.path)
      } : {
        'active': true
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getBreadcrumbItemProps", function (breadcrumb, index) {
      var _this$props = _this.props,
          itemAs = _this$props.itemAs,
          title = _this$props.title,
          target = _this$props.target,
          itemBsPrefix = _this$props.itemBsPrefix,
          itemChildren = _this$props.itemChildren;
      return _objectSpread({
        'key': "breadcrumb" + breadcrumb.id,
        'id': "breadcrumbItem" + breadcrumb.id,
        'as': itemAs,
        'title': title,
        'target': target,
        'bsPrefix': itemBsPrefix,
        'children': itemChildren
      }, _this.createBreadcrumbLink(breadcrumb, index));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getBreadcrumbItems", function (breadcrumb, index) {
      return _react["default"].createElement(_Breadcrumb["default"].Item, _this.getBreadcrumbItemProps(breadcrumb, index), breadcrumb.name);
    });
    return _this;
  }

  (0, _createClass2["default"])(CBreadcrumb, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setCurrentLocationAndFilterRoutes();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      /**
       * SINCE IT IS LIFECYCLE METHOD , IT RUNS WITH EVERY TEST.
       * IN TEST WE DON'T HAVE ACCESS TO 'withRouter' SO IT WILL HAVE TO
       * BE SET MANUALLY IN FEW REQUIRED TEST CASES ONLY.
       * SO FOR OTHER TESTS WHERE THE PROPS ARE NOT SET,
       * 'location' and 'history' OBJECT  WILL NOT BE AVAILABLE RESULTING IN WHOLE TEST SUITE FAILURE.
       */
      if (prevProps.history) {
        var newPath = prevProps.history.location.pathname;
        var oldPath = prevProps.location.pathname;

        if (newPath !== oldPath) {
          this.setCurrentLocationAndFilterRoutes(newPath);
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          as = _this$props2.as,
          label = _this$props2.label,
          listProps = _this$props2.listProps,
          bsPrefix = _this$props2.bsPrefix,
          children = _this$props2.children;
      return _react["default"].createElement(_Breadcrumb["default"], {
        as: as,
        label: label,
        listProps: listProps,
        bsPrefix: bsPrefix,
        children: children
      }, this.state.routes.map(function (breadcrumb, index) {
        return _this2.getBreadcrumbItems(breadcrumb, index);
      }));
    }
  }]);
  return CBreadcrumb;
}(_react.PureComponent);

_react["default"].propTypes = {
  breadcrumbData: _propTypes["default"].array.isRequired,
  as: _propTypes["default"].elementType,
  label: _propTypes["default"].string,
  bsPrefix: _propTypes["default"].string,
  listProps: _propTypes["default"].object,
  children: _propTypes["default"].array,
  title: _propTypes["default"].node,
  target: _propTypes["default"].string,
  href: _propTypes["default"].string,
  active: _propTypes["default"]["boolean"],
  itemAs: _propTypes["default"].elementType,
  itemBsPrefix: _propTypes["default"].string,
  itemChildren: _propTypes["default"].array
};
/**
 * 'withRouter' IS A HIGHER ORDER COMPONENT PROVIDED BY 'react-router-dom'.
 * 'withRouter' WILL PASS UPDATED 'match', 'location', and 'history' PROPS
 * TO THE WRAPPED COMPONENT WHENEVER IT RENDERS.
 * IN BREADCRUMB COMPONENT IT IS USED TO DETECT THE ROUTE CHANGE ALONG WITH 'componentDidUpdate' LIFECYCLE METHOD.
 */

var _default = (0, _reactRouterDom.withRouter)(CBreadcrumb);

exports["default"] = _default;