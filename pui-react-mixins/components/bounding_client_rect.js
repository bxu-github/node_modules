/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _setImmediate2 = require('babel-runtime/core-js/set-immediate');

var _setImmediate3 = _interopRequireDefault(_setImmediate2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _weakMap = require('babel-runtime/core-js/weak-map');

var _weakMap2 = _interopRequireDefault(_weakMap);

var _mixins = require('../mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var raf = require('raf');
var React = require('react');
var ReactDOM = require('react-dom');
var shallowEqual = require('fbjs/lib/shallowEqual');

var ShallowCompare = require('../mixins/shallow_compare_mixin');
var Component = (0, _mixins2.default)(React.Component).with(ShallowCompare);

var rafify = function rafify(callback) {
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    raf(function () {
      return callback.call.apply(callback, [_this].concat(args));
    });
  };
};

var privates = new _weakMap2.default();

var properties = ['width', 'height', 'top', 'right', 'bottom', 'left'];

module.exports = {
  useBoundingClientRect: function useBoundingClientRect(Klass) {
    return function (_Component) {
      (0, _inherits3.default)(BoundingClientRect, _Component);

      function BoundingClientRect(props, context) {
        (0, _classCallCheck3.default)(this, BoundingClientRect);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BoundingClientRect).call(this, props, context));

        _this2.resize = function () {
          var _ref = privates.get(_this2) || {};

          var prevBoundingClientRect = _ref.boundingClientRect;

          var boundingClientRect = _this2.getBoundingClientRect();
          var isNotEqual = function isNotEqual(property) {
            return boundingClientRect[property] !== prevBoundingClientRect[property];
          };
          if (!prevBoundingClientRect || properties.some(isNotEqual)) _this2.forceUpdate();
        };

        var resolver = void 0;
        var containerReady = new _promise2.default(function (resolve) {
          return resolver = resolve;
        });
        containerReady.resolve = resolver;
        var state = _this2.state;

        _this2.state = (0, _extends3.default)({}, state, { container: null, containerReady: containerReady });
        _this2.resize = rafify(_this2.resize);

        _this2.getBoundingClientRect = _this2.getBoundingClientRect.bind(_this2);
        return _this2;
      }

      (0, _createClass3.default)(BoundingClientRect, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this3 = this;

          privates.set(this, { resize: this.resize });
          window.addEventListener('resize', this.resize);
          this.setState({ container: ReactDOM.findDOMNode(this.component) });
          (0, _setImmediate3.default)(function () {
            return _this3.state.containerReady.resolve(_this3.state.container);
          });
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          var _ref2 = privates.get(this) || {};

          var resize = _ref2.resize;

          window.removeEventListener('resize', resize);
          privates.delete(this);
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (!shallowEqual(this.props, nextProps)) this.resize();
        }
      }, {
        key: 'getBoundingClientRect',
        value: function getBoundingClientRect() {
          return this.state.container && this.state.container.getBoundingClientRect() || {};
        }
      }, {
        key: 'render',
        value: function render() {
          var _this4 = this;

          var _ref3 = privates.get(this) || {};

          var resize = _ref3.resize;

          var boundingClientRect = this.getBoundingClientRect();
          privates.set(this, { boundingClientRect: boundingClientRect, resize: resize });
          return React.createElement(Klass, (0, _extends3.default)({}, this.props, this.state, { boundingClientRect: boundingClientRect }, { ref: function ref(_ref4) {
              return _this4.component = _ref4;
            } }));
        }
      }]);
      return BoundingClientRect;
    }(Component);
  }
};