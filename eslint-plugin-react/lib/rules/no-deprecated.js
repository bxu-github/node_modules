/**
 * @fileoverview Prevent usage of deprecated methods
 * @author Yannick Croissant
 * @author Scott Feeney
 */
'use strict';

var pragmaUtil = require('../util/pragma');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var DEPRECATED_MESSAGE = '{{oldMethod}} is deprecated since React {{version}}{{newMethod}}';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = function(context) {

  // Validate React version passed in options
  // (append the patch version if missing, allowing shorthands like 0.12 for React 0.12.0)
  var optVer = context.options[0] ? context.options[0].react : '999.999.999';
  optVer = /^[0-9]+\.[0-9]+$/.test(optVer) ? optVer + '.0' : optVer;
  optVer = optVer.split('.').map(function(part) {
    return Number(part);
  });

  var pragma = pragmaUtil.getFromContext(context);

  function getDeprecated() {
    var deprecated = {
      MemberExpression: {}
    };
    // 0.12.0
    deprecated.MemberExpression[pragma + '.renderComponent'] = ['0.12.0', pragma + '.render'];
    deprecated.MemberExpression[pragma + '.renderComponentToString'] = ['0.12.0', pragma + '.renderToString'];
    deprecated.MemberExpression[pragma + '.renderComponentToStaticMarkup'] = [
      '0.12.0',
      pragma + '.renderToStaticMarkup'
    ];
    deprecated.MemberExpression[pragma + '.isValidComponent'] = ['0.12.0', pragma + '.isValidElement'];
    deprecated.MemberExpression[pragma + '.PropTypes.component'] = ['0.12.0', pragma + '.PropTypes.element'];
    deprecated.MemberExpression[pragma + '.PropTypes.renderable'] = ['0.12.0', pragma + '.PropTypes.node'];
    deprecated.MemberExpression[pragma + '.isValidClass'] = ['0.12.0'];
    deprecated.MemberExpression['this.transferPropsTo'] = ['0.12.0', 'spread operator ({...})'];
    // 0.13.0
    deprecated.MemberExpression[pragma + '.addons.classSet'] = ['0.13.0', 'the npm module classnames'];
    deprecated.MemberExpression[pragma + '.addons.cloneWithProps'] = ['0.13.0', pragma + '.cloneElement'];
    // 0.14.0
    deprecated.MemberExpression[pragma + '.render'] = ['0.14.0', 'ReactDOM.render'];
    deprecated.MemberExpression[pragma + '.unmountComponentAtNode'] = ['0.14.0', 'ReactDOM.unmountComponentAtNode'];
    deprecated.MemberExpression[pragma + '.findDOMNode'] = ['0.14.0', 'ReactDOM.findDOMNode'];
    deprecated.MemberExpression[pragma + '.renderToString'] = ['0.14.0', 'ReactDOMServer.renderToString'];
    deprecated.MemberExpression[pragma + '.renderToStaticMarkup'] = ['0.14.0', 'ReactDOMServer.renderToStaticMarkup'];

    return deprecated;
  }

  function checkVersion(methodVer) {
    methodVer = methodVer.split('.').map(function(part) {
      return Number(part);
    });
    var higherMajor = methodVer[0] < optVer[0];
    var higherMinor = methodVer[0] === optVer[0] && methodVer[1] < optVer[1];
    var higherOrEqualPatch = methodVer[0] === optVer[0] && methodVer[1] === optVer[1] && methodVer[2] <= optVer[2];

    return higherMajor || higherMinor || higherOrEqualPatch;
  }

  function isDeprecated(type, method) {
    var deprecated = getDeprecated();

    return (
      deprecated[type] &&
      deprecated[type][method] &&
      checkVersion(deprecated[type][method][0])
    );
  }

  // --------------------------------------------------------------------------
  // Public
  // --------------------------------------------------------------------------

  return {

    MemberExpression: function(node) {
      var method = context.getSource(node);
      if (!isDeprecated(node.type, method)) {
        return;
      }
      var deprecated = getDeprecated();
      context.report(node, DEPRECATED_MESSAGE, {
        oldMethod: method,
        version: deprecated[node.type][method][0],
        newMethod: deprecated[node.type][method][1] ? ', use ' + deprecated[node.type][method][1] + ' instead' : ''
      });
    },

    BlockComment: function(node) {
      pragma = pragmaUtil.getFromNode(node) || pragma;
    }

  };

};

module.exports.schema = [{
  type: 'object',
  properties: {
    react: {
      type: 'string',
      pattern: '^[0-9]+\.[0-9]+(\.[0-9]+)?$'
    }
  },
  additionalProperties: false
}];
