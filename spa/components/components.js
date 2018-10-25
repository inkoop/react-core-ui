import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Styles from './styles'

export class Components extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={Styles.base}>
        <h2>Components</h2>
        <p>Select a component on the left side navigation to explore its capabilities.</p>
      </div>
    )
  }
}

Components.propTypes = {

}

export default Components
