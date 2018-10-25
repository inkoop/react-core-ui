'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _modal2 = require('./_modal');

var _modal3 = _interopRequireDefault(_modal2);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = exports.Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          overlayClassName = _props.overlayClassName,
          modalClassName = _props.modalClassName,
          onOverlayClick = _props.onOverlayClick,
          onEscKeyDown = _props.onEscKeyDown,
          close = _props.close,
          closeNode = _props.closeNode;

      return _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        {
          'in': active,
          timeout: {
            enter: 200,
            exit: 200
          },
          classNames: {
            enter: _styles2.default.modalTransitionEnter,
            exit: _styles2.default.modalTransitionExit
          },
          unmountOnExit: true },
        _react2.default.createElement(
          _modal3.default,
          {
            close: close,
            closeNode: closeNode,
            overlayClassName: overlayClassName,
            modalClassName: modalClassName,
            onOverlayClick: onOverlayClick,
            onEscKeyDown: onEscKeyDown },
          children
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.propTypes = {
  active: _propTypes2.default.bool.isRequired,
  overlayClassName: _propTypes2.default.string,
  modalClassName: _propTypes2.default.string,
  close: _propTypes2.default.func,
  closeNode: _propTypes2.default.node,
  onEscKeyDown: _propTypes2.default.func,
  onOverlayClick: _propTypes2.default.func
};

exports.default = Modal;