import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Navigation } from 'spa/navigation'
import Styles from './styles'
import GlobalStyles from 'styles/global'

export class Layout extends React.Component {

  constructor(props) {
    super(props)
    this.state = { }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={Styles.base}>
        <Navigation />
        <div className={classNames("layout-container", Styles.layoutContainers)}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {

}

export default Layout
