var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
// eslint-disable-next-line import/no-unresolved, import/extensions

// eslint-disable-next-line import/no-unresolved, import/extensions

// eslint-disable-next-line import/no-unresolved, import/extensions


var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _shallow = require('react-test-renderer/shallow');

var _shallow2 = _interopRequireDefault(_shallow);

var _object3 = require('object.values');

var _object4 = _interopRequireDefault(_object3);

var _enzyme = require('enzyme');

var _enzymeAdapterUtils = require('enzyme-adapter-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function compositeTypeToNodeType(type) {
  switch (type) {
    case 0:
    case 1:
      return 'class';
    case 2:
      return 'function';
    default:
      throw new Error('Enzyme Internal Error: unknown composite type ' + String(type));
  }
}
function childrenFromInst(inst, el) {
  if (inst._renderedChildren) {
    return (0, _object4['default'])(inst._renderedChildren);
  } else if (el.props) {
    return (0, _object4['default'])({ '.0': el.props.children });
  }
  return [];
}

function nodeType(inst) {
  if (inst._compositeType != null) {
    return compositeTypeToNodeType(inst._compositeType);
  }
  return 'host';
}

function instanceToTree(inst) {
  if (!inst || (typeof inst === 'undefined' ? 'undefined' : _typeof(inst)) !== 'object') {
    return inst;
  }
  var el = inst._currentElement;
  if (el == null || el === false) {
    return null;
  } else if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) !== 'object') {
    return el;
  }
  if (inst._renderedChildren) {
    return {
      nodeType: nodeType(inst),
      type: el.type,
      props: el.props,
      key: el.key || undefined,
      ref: el.ref,
      instance: inst._instance || inst._hostNode || null,
      rendered: (0, _object4['default'])(inst._renderedChildren).map(instanceToTree)
    };
  }
  if (inst._hostNode) {
    return {
      nodeType: 'host',
      type: el.type,
      props: el.props,
      key: el.key || undefined,
      ref: el.ref,
      instance: inst._instance || inst._hostNode || null,
      rendered: childrenFromInst(inst, el).map(instanceToTree)
    };
  }
  if (inst._renderedComponent) {
    return {
      nodeType: nodeType(inst),
      type: el.type,
      props: el.props,
      key: el.key || undefined,
      ref: el.ref,
      instance: inst._instance || inst._hostNode || null,
      rendered: instanceToTree(inst._renderedComponent)
    };
  }
  return {
    nodeType: nodeType(inst),
    type: el.type,
    props: el.props,
    key: el.key || undefined,
    ref: el.ref,
    instance: inst._instance || null,
    rendered: childrenFromInst(inst, el).map(instanceToTree)
  };
}

var ReactFifteenAdapter = function (_EnzymeAdapter) {
  _inherits(ReactFifteenAdapter, _EnzymeAdapter);

  function ReactFifteenAdapter() {
    _classCallCheck(this, ReactFifteenAdapter);

    var _this = _possibleConstructorReturn(this, (ReactFifteenAdapter.__proto__ || Object.getPrototypeOf(ReactFifteenAdapter)).call(this));

    _this.options = (0, _object2['default'])({}, _this.options, {
      supportPrevContextArgumentOfComponentDidUpdate: true
    });
    return _this;
  }

  _createClass(ReactFifteenAdapter, [{
    key: 'createMountRenderer',
    value: function () {
      function createMountRenderer(options) {
        (0, _enzymeAdapterUtils.assertDomAvailable)('mount');
        var domNode = options.attachTo || global.document.createElement('div');
        var instance = null;
        return {
          render: function () {
            function render(el, context, callback) {
              if (instance === null) {
                var ReactWrapperComponent = (0, _enzymeAdapterUtils.createMountWrapper)(el, options);
                var wrappedEl = _react2['default'].createElement(ReactWrapperComponent, {
                  Component: el.type,
                  props: el.props,
                  context: context
                });
                instance = _reactDom2['default'].render(wrappedEl, domNode);
                if (typeof callback === 'function') {
                  callback();
                }
              } else {
                instance.setChildProps(el.props, context, callback);
              }
            }

            return render;
          }(),
          unmount: function () {
            function unmount() {
              _reactDom2['default'].unmountComponentAtNode(domNode);
              instance = null;
            }

            return unmount;
          }(),
          getNode: function () {
            function getNode() {
              return instance ? instanceToTree(instance._reactInternalInstance).rendered : null;
            }

            return getNode;
          }(),
          simulateEvent: function () {
            function simulateEvent(node, event, mock) {
              var mappedEvent = (0, _enzymeAdapterUtils.mapNativeEventNames)(event);
              var eventFn = _testUtils2['default'].Simulate[mappedEvent];
              if (!eventFn) {
                throw new TypeError('ReactWrapper::simulate() event \'' + String(event) + '\' does not exist');
              }
              // eslint-disable-next-line react/no-find-dom-node
              eventFn(_reactDom2['default'].findDOMNode(node.instance), mock);
            }

            return simulateEvent;
          }(),
          batchedUpdates: function () {
            function batchedUpdates(fn) {
              return _reactDom2['default'].unstable_batchedUpdates(fn);
            }

            return batchedUpdates;
          }()
        };
      }

      return createMountRenderer;
    }()
  }, {
    key: 'createShallowRenderer',
    value: function () {
      function createShallowRenderer() /* options */{
        var renderer = new _shallow2['default']();
        var isDOM = false;
        var cachedNode = null;
        return {
          render: function () {
            function render(el, context) {
              cachedNode = el;
              /* eslint consistent-return: 0 */
              if (typeof el.type === 'string') {
                isDOM = true;
              } else {
                isDOM = false;
                return (0, _enzymeAdapterUtils.withSetStateAllowed)(function () {
                  return renderer.render(el, context);
                });
              }
            }

            return render;
          }(),
          unmount: function () {
            function unmount() {
              renderer.unmount();
            }

            return unmount;
          }(),
          getNode: function () {
            function getNode() {
              if (isDOM) {
                return (0, _enzymeAdapterUtils.elementToTree)(cachedNode);
              }
              var output = renderer.getRenderOutput();
              return {
                nodeType: compositeTypeToNodeType(renderer._instance._compositeType),
                type: cachedNode.type,
                props: cachedNode.props,
                key: cachedNode.key || undefined,
                ref: cachedNode.ref,
                instance: renderer._instance._instance,
                rendered: (0, _enzymeAdapterUtils.elementToTree)(output)
              };
            }

            return getNode;
          }(),
          simulateEvent: function () {
            function simulateEvent(node, event) {
              for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                args[_key - 2] = arguments[_key];
              }

              var handler = node.props[(0, _enzymeAdapterUtils.propFromEvent)(event)];
              if (handler) {
                (0, _enzymeAdapterUtils.withSetStateAllowed)(function () {
                  // TODO(lmr): create/use synthetic events
                  // TODO(lmr): emulate React's event propagation
                  renderer.unstable_batchedUpdates(function () {
                    handler.apply(undefined, _toConsumableArray(args));
                  });
                });
              }
            }

            return simulateEvent;
          }(),
          batchedUpdates: function () {
            function batchedUpdates(fn) {
              return (0, _enzymeAdapterUtils.withSetStateAllowed)(function () {
                return renderer.unstable_batchedUpdates(fn);
              });
            }

            return batchedUpdates;
          }()
        };
      }

      return createShallowRenderer;
    }()
  }, {
    key: 'createStringRenderer',
    value: function () {
      function createStringRenderer(options) {
        return {
          render: function () {
            function render(el, context) {
              if (options.context && (el.type.contextTypes || options.childContextTypes)) {
                var childContextTypes = (0, _object2['default'])({}, el.type.contextTypes || {}, options.childContextTypes);
                var ContextWrapper = (0, _enzymeAdapterUtils.createRenderWrapper)(el, context, childContextTypes);
                return _server2['default'].renderToStaticMarkup(_react2['default'].createElement(ContextWrapper));
              }
              return _server2['default'].renderToStaticMarkup(el);
            }

            return render;
          }()
        };
      }

      return createStringRenderer;
    }()

    // Provided a bag of options, return an `EnzymeRenderer`. Some options can be implementation
    // specific, like `attach` etc. for React, but not part of this interface explicitly.
    // eslint-disable-next-line class-methods-use-this, no-unused-vars

  }, {
    key: 'createRenderer',
    value: function () {
      function createRenderer(options) {
        switch (options.mode) {
          case _enzyme.EnzymeAdapter.MODES.MOUNT:
            return this.createMountRenderer(options);
          case _enzyme.EnzymeAdapter.MODES.SHALLOW:
            return this.createShallowRenderer(options);
          case _enzyme.EnzymeAdapter.MODES.STRING:
            return this.createStringRenderer(options);
          default:
            throw new Error('Enzyme Internal Error: Unrecognized mode: ' + String(options.mode));
        }
      }

      return createRenderer;
    }()

    // converts an RSTNode to the corresponding JSX Pragma Element. This will be needed
    // in order to implement the `Wrapper.mount()` and `Wrapper.shallow()` methods, but should
    // be pretty straightforward for people to implement.
    // eslint-disable-next-line class-methods-use-this, no-unused-vars

  }, {
    key: 'nodeToElement',
    value: function () {
      function nodeToElement(node) {
        if (!node || (typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== 'object') return null;
        return _react2['default'].createElement(node.type, (0, _enzymeAdapterUtils.propsWithKeysAndRef)(node));
      }

      return nodeToElement;
    }()
  }, {
    key: 'elementToNode',
    value: function () {
      function elementToNode(element) {
        return (0, _enzymeAdapterUtils.elementToTree)(element);
      }

      return elementToNode;
    }()
  }, {
    key: 'nodeToHostNode',
    value: function () {
      function nodeToHostNode(node) {
        return _reactDom2['default'].findDOMNode(node.instance);
      }

      return nodeToHostNode;
    }()
  }, {
    key: 'isValidElement',
    value: function () {
      function isValidElement(element) {
        return _react2['default'].isValidElement(element);
      }

      return isValidElement;
    }()
  }, {
    key: 'createElement',
    value: function () {
      function createElement() {
        return _react2['default'].createElement.apply(_react2['default'], arguments);
      }

      return createElement;
    }()
  }]);

  return ReactFifteenAdapter;
}(_enzyme.EnzymeAdapter);

module.exports = ReactFifteenAdapter;