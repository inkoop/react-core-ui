import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import Styles from "./styles";
import { Tooltip } from "components/tooltip";

export class Tooltips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipUp: false,
      tooltipRight: false,
      tooltipDown: false,
      tooltipLeft: false
    };
  }

  render() {
    const { tooltipUp, tooltipRight, tooltipDown, tooltipLeft } = this.state;
    return (
      <div className={Styles.base}>
        <br />
        <br />
        <span style={{ position: "relative" }}>
          <button onMouseEnter={() => { this.setState({ tooltipUp: true }) }} onMouseLeave={() => { this.setState({ tooltipUp: false }) }}>Tooltip Up</button>
          <Tooltip active={tooltipUp} position={"top"}>
            Contacts
          </Tooltip>
        </span>
        <br />
        <br />
        <span style={{ position: "relative" }}>
          <button onMouseEnter={() => { this.setState({ tooltipRight: true }) }} onMouseLeave={() => { this.setState({ tooltipRight: false }) }}>Tooltip Right</button>
          <Tooltip active={tooltipRight} position={"right"}>
            Contacts
          </Tooltip>
        </span>
        <br />
        <br />
        <span style={{ position: "relative" }}>
          <button onMouseEnter={() => { this.setState({ tooltipDown: true }) }} onMouseLeave={() => { this.setState({ tooltipDown: false }) }}>Tooltip Down</button>
          <Tooltip active={tooltipDown} position={"bottom"}>
            Contacts
          </Tooltip>
        </span>
        <br />
        <br />
        <span style={{ position: "relative" }}>
          <button onMouseEnter={() => { this.setState({ tooltipLeft: true }) }} onMouseLeave={() => { this.setState({ tooltipLeft: false }) }}>Tooltip Left</button>
          <Tooltip active={tooltipLeft} position={"left"}>
            Contacts
          </Tooltip>
        </span>
        <br />
        <br />
        <h4>Documentation</h4>
        <table>
          <tbody>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Required</th>
            </tr>
            <tr>
              <td>active</td>
              <td>bool</td>
              <td>yes</td>
            </tr>
            <tr>
              <td>position</td>
              <td>string ('top' | 'left' | 'right' | 'bottom')</td>
              <td>yes</td>
            </tr>
            <tr>
              <td>dark</td>
              <td>bool</td>
              <td>no</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Tooltips.propTypes = {};

export default Tooltips;
