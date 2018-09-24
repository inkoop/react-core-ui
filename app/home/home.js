import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Styles from './styles'

export class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={Styles.base}>
        Home!
      </div>
    )
  }
}

Home.propTypes = {

}

export default Home
