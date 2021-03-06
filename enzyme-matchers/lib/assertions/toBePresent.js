'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBePresent;

var _html = require('../utils/html');

var _html2 = _interopRequireDefault(_html);

var _name = require('../utils/name');

var _name2 = _interopRequireDefault(_name);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toBePresent(enzymeWrapper) {
  var pass = enzymeWrapper.length !== 0;

  var contextualInformation = {};

  if (enzymeWrapper.getElements().length) {
    contextualInformation.actual = 'Found Nodes: ' + (0, _html2.default)(enzymeWrapper);
  }

  return {
    pass: pass,
    message: 'Expected "' + (0, _name2.default)(enzymeWrapper) + '.toBePresent()" results to contain at least one node, instead found none.',
    negatedMessage: 'Expected "' + (0, _name2.default)(enzymeWrapper) + '.not.toBePresent()" selector results to contain 0 nodes, instead found ' + enzymeWrapper.getElements().length + '.',
    contextualInformation: contextualInformation
  };
} /**
   * This source code is licensed under the MIT-style license found in the
   * LICENSE file in the root directory of this source tree. *
   *
   * @providesModule toBePresentAssertion
   * 
   */

module.exports = exports['default'];