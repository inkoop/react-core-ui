// import React from 'react'
// import classNames from 'classnames'
// import PropTypes from 'prop-types'
// import NotificationSystem from 'react-notification-system'
// NotificationSystem.displayName = 'NotificationSystem'
// import Notifications from 'shared/models/notifications'
// import { connect } from 'react-redux'
// // import { TopBanner } from 'shared/components/top_banner'
// /* Styles */
// import Styles from './styles'
// import GlobalStyles from 'shared/styles/global'
// import NotificationStyles from 'shared/styles/notification_system'
//
//
// export class BlankLayout extends React.Component {
//
//   constructor(props) {
//     super(props)
//     this.state = { }
//   }
//
//   componentDidMount() {
//     Notifications.setRef(this.refs.notificationSystem)
//   }
//
//   render() {
//     return (
//       <div className={classNames(Styles.base, Styles.blankLayout)}>
//         <NotificationSystem
//           ref="notificationSystem"
//           style={NotificationStyles} />
//         <div className={Styles.layoutContainer}>
//           {this.props.children}
//         </div>
//       </div>
//     )
//   }
// }
//
// BlankLayout.propTypes = {
//   topBanner: PropTypes.object.isRequired,
//   children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
// }
//
// function mapStateToProps(state) {
//   return {
//     topBanner: state.topBanner
//   }
// }
//
// export default connect(mapStateToProps, null)(BlankLayout)
