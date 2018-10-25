import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Navigation } from 'spa/navigation'
import { ComponentNavigation } from 'spa/component_navigation'
import Styles from './styles'
import GlobalStyles from 'styles/global'

export class ComponentLayout extends React.Component {

  constructor(props) {
    super(props)
    this.state = { }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={classNames(Styles.base, Styles.componentLayout)}>
        <Navigation />
        <ComponentNavigation />
        <div className={classNames("layout-container", Styles.layoutContainer)}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

ComponentLayout.propTypes = {

}

export default ComponentLayout
