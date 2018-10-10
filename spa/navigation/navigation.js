import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Styles from './styles'

export class Navigation extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={Styles.base}>
        React Core
      </div>
    )
  }
}

Navigation.propTypes = {

}

export default Navigation
