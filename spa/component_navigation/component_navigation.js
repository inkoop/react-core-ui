import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import Styles from "./styles";
import { withRouter } from "react-router-dom";

export class ComponentNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;
    return (
      <div className={Styles.base}>
        <ul>
          <li>
            <a
              href="/components/modal"
              onClick={e => {
                e.preventDefault();
                history.push("/components/modal");
              }}
            >
              Modal
            </a>
          </li>
          <li>
            <a
              href="/components/tooltip"
              onClick={e => {
                e.preventDefault();
                history.push("/components/tooltip");
              }}
            >
              Tooltip
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

ComponentNavigation.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(ComponentNavigation);
