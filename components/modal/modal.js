import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Styles from './styles'
import _modal from './_modal'
import { CSSTransition } from 'react-transition-group'

export class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      active,
      children,
      overlayClassName,
      modalClassName,
      onOverlayClick,
      onEscKeyDown,
      close,
      closeNode
    } = this.props
    return (<CSSTransition
      in={active}
      timeout={{
        enter: 200,
        exit: 200
      }}
      classNames={{
       enter: Styles.modalTransitionEnter,
       exit: Styles.modalTransitionExit
      }}
      unmountOnExit>
      <_modal
        close={close}
        closeNode={closeNode}
        overlayClassName={overlayClassName}
        modalClassName={modalClassName}
        onOverlayClick={onOverlayClick}
        onEscKeyDown={onEscKeyDown}>
        {children}
      </_modal>
    </CSSTransition>)
  }
}

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]).isRequired,
  overlayClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  close: PropTypes.func,
  closeNode: PropTypes.node,
  onEscKeyDown: PropTypes.func,
  onOverlayClick: PropTypes.func
}

export default Modal
