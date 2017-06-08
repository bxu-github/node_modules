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

var _get4 = require('babel-runtime/helpers/get');

var _get5 = _interopRequireDefault(_get4);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _weakMap = require('babel-runtime/core-js/weak-map');

var _weakMap2 = _interopRequireDefault(_weakMap);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = _react2.default.PropTypes;

function rootClick(e) {
  if (this.props.disableScrim || _reactDom2.default.findDOMNode(this).contains(e.target)) return;
  this.scrimClick(e);
}

var privates = new _weakMap2.default();

module.exports = function (ParentClass) {
  var _class, _temp;

  return _temp = _class = function (_ParentClass) {
    (0, _inherits3.default)(Scrim, _ParentClass);

    function Scrim(props, context) {
      (0, _classCallCheck3.default)(this, Scrim);

      var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Scrim).call(this, props, context));

      privates.set(_this, rootClick.bind(_this));
      return _this;
    }

    (0, _createClass3.default)(Scrim, [{
      key: 'scrimClick',
      value: function scrimClick() {}
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _get2;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if ((0, _get5.default)((0, _getPrototypeOf2.default)(Scrim.prototype), 'componentDidMount', this)) (_get2 = (0, _get5.default)((0, _getPrototypeOf2.default)(Scrim.prototype), 'componentDidMount', this)).call.apply(_get2, [this].concat(args));
        document.documentElement.addEventListener('click', privates.get(this));
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var _get3;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        if ((0, _get5.default)((0, _getPrototypeOf2.default)(Scrim.prototype), 'componentWillUnmount', this)) (_get3 = (0, _get5.default)((0, _getPrototypeOf2.default)(Scrim.prototype), 'componentWillUnmount', this)).call.apply(_get3, [this].concat(args));
        document.documentElement.removeEventListener('click', privates.get(this));
      }
    }]);
    return Scrim;
  }(ParentClass), _class.propTypes = {
    disableScrim: types.bool
  }, _temp;
};