import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Styles from './styles'
import _tooltip from './_tooltip'
import { CSSTransition } from 'react-transition-group'

export class Tooltip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      disabled,
      active,
      position,
      children,
      className,
      dark
    } = this.props
    return (
      <CSSTransition
        in={(active || false) && !((disabled ? false : true) || false)}
        timeout={{
          enter: 260,
          exit: 260
        }}
        classNames={{
          enter: Styles.tooltipTransitionEnter,
          exit: Styles.tooltipTransitionExit
        }}
        unmountOnExit>
        <_tooltip
          className={className}
          position={position || 'bottom'}
          dark={dark}>
          {children}
        </_tooltip>
      </CSSTransition>
    )
  }
}

Tooltip.propTypes = {
  disabled: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
  active: PropTypes.bool,
  dark: PropTypes.bool
}

export default Tooltip
