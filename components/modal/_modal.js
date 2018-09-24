import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Styles from './styles'
import GlobalStyles from '../../styles/global'

export class _modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalWrapper = document.createElement('div')
    this.overlayRef = React.createRef()
    this.modalRef = React.createRef()
    this.escFunction = this.escFunction.bind(this)
    this.state = {
      fadeOut: false
    }
  }

  escFunction(e) {
    if (e.keyCode === 27) {
      if (typeof(this.props.onEscKeyDown) == "function") {
        this.props.onEscKeyDown()
      }
    }
  }

  componentDidMount() {
    document.body.classList.add(GlobalStyles.noOverflow)
    document.body.appendChild(this.modalWrapper)
    document.addEventListener("keydown", this.escFunction, false)
  }

  componentWillUnmount() {
    document.body.classList.remove(GlobalStyles.noOverflow)
    document.body.removeChild(this.modalWrapper)
    document.removeEventListener("keydown", this.escFunction, false)
  }

  overlayClick(e) {
    if (e.target == this.overlayRef.current) {
      if (typeof(this.props.onOverlayClick) == "function") {
        this.props.onOverlayClick()
      }
    }
  }

  close(close, closeNode) {
    if (closeNode) {
      return (
        <span className={Styles.close} onClick={close}>
          {closeNode}
        </span>
      )
    } else {
      return (
        <span className={Styles.close} onClick={close}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
        </span>
      )
    }
  }

  modal() {
    const { children, overlayClassName, modalClassName, close, closeNode } = this.props
    return (
      <div className={classNames(Styles.base, overlayClassName, { [Styles.fadeOut]: this.state.fadeOut })}
        ref={this.overlayRef}
        onClick={this.overlayClick.bind(this)}>
        <div className={classNames(Styles.modal, modalClassName, { [Styles.fadeOut]: this.state.fadeOut })}
          ref={this.modalRef}>
          {close ? this.close(close, closeNode) : null}
          {children}
        </div>
      </div>
    )
  }

  render() {
    return ReactDOM.createPortal(
      this.modal(),
      this.modalWrapper
    )
  }
}

_modal.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.object, PropTypes.array, PropTypes.string ]).isRequired,
  overlayClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  close: PropTypes.func,
  closeNode: PropTypes.node,
  onEscKeyDown: PropTypes.func,
  onOverlayClick: PropTypes.func
}

export default _modal
