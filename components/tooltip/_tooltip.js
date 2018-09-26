import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Styles from './styles'
import GlobalStyles from '../../styles/global'

export class _tooltip extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      position: props.position
    }
  }

  componentDidMount() {
    const {
      position
    } = this.state
    const dem = ReactDOM.findDOMNode(this).getBoundingClientRect()
    if (typeof(window) != "undefined") {
      switch(position) {
        case 'right':
          if ((dem.x + dem.width) > window.innerWidth) { this.setState({ position: 'left' }) }
          break
        case 'left':
          if (dem.x < 0) { this.setState({ position: 'right' }) }
          break
        case 'top':
          if (dem.y < 0) { this.setState({ position: 'bottom' }) }
          break
        case 'bottom':
          if ((dem.y + dem.height) > window.innerHeight) { this.setState({ position: 'top' }) }
          break
      }
    }
  }

  render() {
    const {
      children,
      className,
      dark
    } = this.props
    const {
      position
    } = this.state
    return (
      <div className={classNames(Styles.base, className, Styles[position], { [Styles.dark]: dark })}>
        {children}
      </div>
    )
  }
}

_tooltip.propTypes = {
  position: PropTypes.oneOf(['top', 'left', 'right', 'bottom']).isRequired,
  className: PropTypes.string,
  dark: PropTypes.bool
}

export default _tooltip
