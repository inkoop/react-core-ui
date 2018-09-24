import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import NotificationSystem from 'react-notification-system'
NotificationSystem.displayName = 'NotificationSystem'
import { TopBanner } from 'shared/components/top_banner'
import { SideNavigation } from 'app/components/side_navigation'
import { MobileNavigation } from 'shared/components/mobile_navigation'
import Notifications from 'shared/models/notifications'
import Styles from './styles'
import GlobalStyles from 'shared/styles/global'
import NotificationStyles from 'shared/styles/notification_system'
import { connect } from 'react-redux'
import { BlobUploads } from 'shared/components/blob_uploads'


export class Layout extends React.Component {

  constructor(props) {
    super(props)
    this.state = { }
  }

  componentDidMount() {
    Notifications.setRef(this.refs.notificationSystem)
  }

  render() {
    const { disabled, message } = this.props.topBanner
    return (
      <div className={Styles.base}>
        <NotificationSystem
          ref="notificationSystem"
          style={NotificationStyles} />
        <TopBanner />
        <MobileNavigation />
        <div className={classNames("layout-container", Styles.layoutContainer, {
          [Styles.topBanner]: !(disabled || ((message || "") == ""))
        })}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  topBanner: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    topBanner: state.topBanner
  }
}

export default connect(mapStateToProps, null)(Layout)
