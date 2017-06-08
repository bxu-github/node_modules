/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
"use strict";

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require("babel-runtime/helpers/get");

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _weakMap = require("babel-runtime/core-js/weak-map");

var _weakMap2 = _interopRequireDefault(_weakMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var privates = new _weakMap2.default();

module.exports = function (ParentClass) {
  return function (_ParentClass) {
    (0, _inherits3.default)(Mounted, _ParentClass);

    function Mounted() {
      (0, _classCallCheck3.default)(this, Mounted);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Mounted).apply(this, arguments));
    }

    (0, _createClass3.default)(Mounted, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        privates.set(this, { isMounted: true });
        if ((0, _get3.default)((0, _getPrototypeOf2.default)(Mounted.prototype), "componentDidMount", this)) (0, _get3.default)((0, _getPrototypeOf2.default)(Mounted.prototype), "componentDidMount", this).call(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        privates.delete(this);
        if ((0, _get3.default)((0, _getPrototypeOf2.default)(Mounted.prototype), "componentWillUnmount", this)) (0, _get3.default)((0, _getPrototypeOf2.default)(Mounted.prototype), "componentWillUnmount", this).call(this);
      }
    }, {
      key: "mounted",
      value: function mounted() {
        var _ref = privates.get(this) || {};

        var isMounted = _ref.isMounted;

        return !!isMounted;
      }
    }]);
    return Mounted;
  }(ParentClass);
};