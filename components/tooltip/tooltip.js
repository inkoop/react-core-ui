import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Styles from './styles'
import _tooltip from './_tooltip'
import { CSSTransition } from 'react-transition-group'

export class CustomTooltip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      active,
      position,
      children,
      className,
      dark
    } = this.props
    return (
      <CSSTransition in={active} timeout={{ enter: 260, exit: 260 }} classNames={{ enter: Styles.tooltipTransitionEnter, exit: Styles.tooltipTransitionExit }} unmountOnExit>
        <_tooltip
          className={className}
          position={position}
          dark={dark}>
          {children}
        </_tooltip>
      </CSSTransition>
    )
  }
}

CustomTooltip.propTypes = {
  position: PropTypes.oneOf(['top', 'left', 'right', 'bottom']).isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object, PropTypes.string ]).isRequired,
  dark: PropTypes.bool
}

export default CustomTooltip
