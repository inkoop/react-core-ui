import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links'
import { Modal } from '../components/modal';
import { Tooltip } from '../components/tooltip';

class ModalWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          close={() => { action('*close clicked*')(); this.setState({ active: false })}}
          onEscKeyDown={() => { action('*esc key pressed*')(); this.setState({ active: false })}}
          onOverlayClick={() => { action('*overlay clicked*')(); this.setState({ active: false })}}
          active={this.state.active}>
          <h3>Modal Example</h3>
          <p>Some nice modal text here!</p>
        </Modal>
        <button style={{ margin: '100px auto', display: 'block' }} onClick={() => { action('*button clicked*')(); this.setState({ active: true }) }}>Open Modal</button>
      </React.Fragment>
    )
  }
}

storiesOf('Modal', module)
  .add('Plain Modal', () => (
    <ModalWrapper />
  ))
