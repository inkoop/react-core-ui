'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._tooltip = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _global = require('../../styles/global');

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _tooltip = exports._tooltip = function (_React$Component) {
  _inherits(_tooltip, _React$Component);

  function _tooltip(props) {
    _classCallCheck(this, _tooltip);

    var _this = _possibleConstructorReturn(this, (_tooltip.__proto__ || Object.getPrototypeOf(_tooltip)).call(this, props));

    _this.state = {
      position: props.position
    };
    return _this;
  }

  _createClass(_tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var position = this.state.position;

      var dem = _reactDom2.default.findDOMNode(this).getBoundingClientRect();
      if (typeof window != "undefined") {
        switch (position) {
          case 'right':
            if (dem.x + dem.width > window.innerWidth) {
              this.setState({ position: 'left' });
            }
            break;
          case 'left':
            if (dem.x < 0) {
              this.setState({ position: 'right' });
            }
            break;
          case 'top':
            if (dem.y < 0) {
              this.setState({ position: 'bottom' });
            }
            break;
          case 'bottom':
            if (dem.y + dem.height > window.innerHeight) {
              this.setState({ position: 'top' });
            }
            break;
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          dark = _props.dark;
      var position = this.state.position;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(_styles2.default.base, className, _styles2.default[position], _defineProperty({}, _styles2.default.dark, dark)) },
        children
      );
    }
  }]);

  return _tooltip;
}(_react2.default.Component);

_tooltip.propTypes = {
  position: _propTypes2.default.oneOf(['top', 'left', 'right', 'bottom']).isRequired,
  className: _propTypes2.default.string,
  dark: _propTypes2.default.bool
};

exports.default = _tooltip;