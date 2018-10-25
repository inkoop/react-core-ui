import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import Styles from "./styles";

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={Styles.base}>
        <h2>React Core UI</h2>
        <p>
          Hello! React Core UI is a library that makes very simple react
          components to use within your application.
        </p>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
