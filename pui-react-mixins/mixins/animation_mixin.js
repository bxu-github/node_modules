/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _puiReactAnimation = require('pui-react-animation');

var _puiReactAnimation2 = _interopRequireDefault(_puiReactAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function Animation(ParentClass) {
  return function (_ParentClass) {
    (0, _inherits3.default)(Animation, _ParentClass);

    function Animation() {
      var _Object$getPrototypeO;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Animation);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Animation)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldAnimate = _puiReactAnimation2.default.shouldAnimate, _this.animate = _puiReactAnimation2.default.animate, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Animation, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if ((0, _get3.default)((0, _getPrototypeOf2.default)(Animation.prototype), 'componentWillUnmount', this)) (0, _get3.default)((0, _getPrototypeOf2.default)(Animation.prototype), 'componentWillUnmount', this).call(this);
        _puiReactAnimation2.default.componentWillUnmount.call(this);
      }
    }]);
    return Animation;
  }(ParentClass);
};