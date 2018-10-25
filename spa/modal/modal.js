import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import Styles from "./styles";
import { Modal } from "components/modal";

export class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOne: false,
      activeTwo: false
    };
    this.setActive = this.setActive.bind(this);
  }

  setActive(hash) {
    this.setState(hash);
  }

  render() {
    const { activeOne, activeTwo } = this.state;
    return (
      <div className={Styles.base}>
        <h2>Modal</h2>
        <h4>Examples</h4>
        <button onClick={this.setActive.bind(this, { activeOne: true })}>
          Example One
        </button>
        <Modal
          active={activeOne}
          close={this.setActive.bind(this, { activeOne: false })}
        >
          <h2>Example 1 Title!</h2>
          <p>
            Content here!
          </p>
          <ul>
            <li>You can only click the X to get out of this modal.</li>
          </ul>
          <h4>Maybe a footer here!</h4>
        </Modal>
        <button onClick={this.setActive.bind(this, { activeTwo: true })}>
          Example Two
        </button>
        <Modal
          active={activeTwo}
          close={this.setActive.bind(this, { activeTwo: false })}
          onEscKeyDown={this.setActive.bind(this, { activeTwo: false })}
          onOverlayClick={this.setActive.bind(this, { activeTwo: false })}
        >
          <h2>Example 2 Title!</h2>
          <p>
            Content here!
          </p>
          <ul>
            <li>You can click the X to get out of this modal.</li>
            <li>You can press esc to get out of this modal.</li>
            <li>You can click the overlay to get out of this modal.</li>
          </ul>
          <h4>Maybe a footer here!</h4>
        </Modal>
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
              <td>close</td>
              <td>func</td>
              <td>no</td>
            </tr>
            <tr>
              <td>closeNode</td>
              <td>func</td>
              <td>no</td>
            </tr>
            <tr>
              <td>onEscKeyDown</td>
              <td>func</td>
              <td>no</td>
            </tr>
            <tr>
              <td>onOverlayClick</td>
              <td>func</td>
              <td>no</td>
            </tr>
            <tr>
              <td>overlayClassName</td>
              <td>string</td>
              <td>no</td>
            </tr>
            <tr>
              <td>modalClassName</td>
              <td>string</td>
              <td>no</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Modals.propTypes = {};

export default Modals;
