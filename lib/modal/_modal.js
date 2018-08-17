'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._modal = undefined;

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

var _modal = function (_React$Component) {
  _inherits(_modal, _React$Component);

  function _modal(props) {
    _classCallCheck(this, _modal);

    var _this = _possibleConstructorReturn(this, (_modal.__proto__ || Object.getPrototypeOf(_modal)).call(this, props));

    _this.modalWrapper = document.createElement('div');
    _this.overlayRef = _react2.default.createRef();
    _this.modalRef = _react2.default.createRef();
    _this.escFunction = _this.escFunction.bind(_this);
    _this.state = {
      fadeOut: false
    };
    return _this;
  }

  _createClass(_modal, [{
    key: 'escFunction',
    value: function escFunction(e) {
      if (e.keyCode === 27) {
        if (typeof this.props.onEscKeyDown == "function") {
          this.props.onEscKeyDown();
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.classList.add(_global2.default.noOverflow);
      document.body.appendChild(this.modalWrapper);
      document.addEventListener("keydown", this.escFunction, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.classList.remove(_global2.default.noOverflow);
      document.body.removeChild(this.modalWrapper);
      document.removeEventListener("keydown", this.escFunction, false);
    }
  }, {
    key: 'overlayClick',
    value: function overlayClick(e) {
      if (e.target == this.overlayRef.current) {
        if (typeof this.props.onOverlayClick == "function") {
          this.props.onOverlayClick();
        }
      }
    }
  }, {
    key: 'close',
    value: function close(_close, closeNode) {
      if (closeNode) {
        return _react2.default.createElement(
          'span',
          { className: _styles2.default.close, onClick: _close },
          closeNode
        );
      } else {
        return _react2.default.createElement(
          'span',
          { className: _styles2.default.close, onClick: _close },
          _react2.default.createElement(
            'svg',
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 352 512' },
            _react2.default.createElement('path', { d: 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z' })
          )
        );
      }
    }
  }, {
    key: 'modal',
    value: function modal() {
      var _props = this.props,
          children = _props.children,
          overlayClassName = _props.overlayClassName,
          modalClassName = _props.modalClassName,
          close = _props.close,
          closeNode = _props.closeNode;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(_styles2.default.base, overlayClassName, _defineProperty({}, _styles2.default.fadeOut, this.state.fadeOut)),
          ref: this.overlayRef,
          onClick: this.overlayClick.bind(this) },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(_styles2.default.modal, modalClassName, _defineProperty({}, _styles2.default.fadeOut, this.state.fadeOut)),
            ref: this.modalRef },
          close ? this.close(close, closeNode) : null,
          children
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _reactDom2.default.createPortal(this.modal(), this.modalWrapper);
    }
  }]);

  return _modal;
}(_react2.default.Component);

exports._modal = _modal;


_modal.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).isRequired,
  overlayClassName: _propTypes2.default.string,
  modalClassName: _propTypes2.default.string,
  close: _propTypes2.default.func,
  closeNode: _propTypes2.default.node,
  onEscKeyDown: _propTypes2.default.func,
  onOverlayClick: _propTypes2.default.func
};

exports.default = _modal;