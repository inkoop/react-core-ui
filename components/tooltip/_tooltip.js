import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Styles from './styles'
import GlobalStyles from '../../styles/global'

export class _tooltip extends React.Component {

  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    const {
      children,
      className,
      position,
      dark
    } = this.props
    return (
      <div className={classNames(Styles.base, className, Styles[position], { [Styles.dark]: dark })}>
        {children}
      </div>
    )
  }
}

_tooltip.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object, PropTypes.string ]).isRequired,
  position: PropTypes.oneOf(['top', 'left', 'right', 'bottom']).isRequired,
  className: PropTypes.string,
  dark: PropTypes.bool
}

export default _tooltip
