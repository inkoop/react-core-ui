import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Styles from './styles'
import _tooltip from './_tooltip'
import { CSSTransition } from 'react-transition-group'

export class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onClick
    } = this.props
    return (
      <button
        onClick={onClick}
      >
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  dark: PropTypes.bool
}

export default Button
