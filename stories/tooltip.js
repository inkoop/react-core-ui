import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import { Modal } from '../components/modal';
import { Tooltip } from '../components/tooltip';

class TooltipWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  render() {
    return (
      <div>
        <span
          onMouseEnter={() => { this.setState({ active: true }) }}
          onMouseLeave={() => { this.setState({ active: false }) }}
          style={{ position: 'relative', margin: '100px auto', display: 'block', textAlign: 'center', maxWidth: '70px' }}>
          Some Text
          <Tooltip
            active={this.state.active}
            position={'right'}>
            Hello!
          </Tooltip>
        </span>
      </div>
    )
  }
}

storiesOf('Tooltip', module)
  .addDecorator(withInfo({
    header: false,
    text: 'Tooltip - In order to position itself correctly, this component must be placed within a `position: relative` parent.',
    inline: true
  }))
  .add('Closed', () => (
    <Tooltip
      active={false}
      position={'bottom'}>
      Hello!
    </Tooltip>
  ))
  .add('Open Bottom (Light UI)', () => (
    <div>
      <span style={{ position: 'relative', margin: '100px auto', display: 'block', textAlign: 'center', maxWidth: '70px' }}>
        Some Text
        <Tooltip
          active={true}
          position={'bottom'}>
          Hello!
        </Tooltip>
      </span>
    </div>
  ))
  .add('Open Bottom (Dark UI)', () => (
    <div>
      <span style={{ position: 'relative', margin: '100px auto', display: 'block', textAlign: 'center', maxWidth: '70px' }}>
        Some Text
        <Tooltip
          dark
          active={true}
          position={'bottom'}>
          Hello!
        </Tooltip>
      </span>
    </div>
  ))
  .add('Open Right (Light UI)', () => (
    <div>
      <span style={{ position: 'relative', margin: '100px auto', display: 'block', textAlign: 'center', maxWidth: '70px' }}>
        Some Text
        <Tooltip
          active={true}
          position={'right'}>
          Hello!
        </Tooltip>
      </span>
    </div>
  ))
  .add('Open Right (Dark UI)', () => (
    <div>
      <span style={{ position: 'relative', margin: '100px auto', display: 'block', textAlign: 'center', maxWidth: '70px' }}>
        Some Text
        <Tooltip
          dark
          active={true}
          position={'right'}>
          Hello!
        </Tooltip>
      </span>
    </div>
  ))
  .add('Open Left (Light UI)', () => (
    <div>
      <span style={{ position: 'relative', margin: '100px auto', display: 'block', textAlign: 'center', maxWidth: '70px' }}>
        Some Text
        <Tooltip
          active={true}
          position={'left'}>
          Hello!
        </Tooltip>
      </span>
    </div>
  ))
  .add('Open Left (Dark UI)', () => (
    <div>
      <span style={{ position: 'relative', margin: '100px auto', display: 'block', textAlign: 'center', maxWidth: '70px' }}>
        Some Text
        <Tooltip
          dark
          active={true}
          position={'left'}>
          Hello!
        </Tooltip>
      </span>
    </div>
  ))
  .add('Open Top (Light UI)', () => (
    <div>
      <span style={{ position: 'relative', margin: '100px auto', display: 'block', textAlign: 'center', maxWidth: '70px' }}>
        Some Text
        <Tooltip
          active={true}
          position={'top'}>
          Hello!
        </Tooltip>
      </span>
    </div>
  ))
  .add('Open Top (Dark UI)', () => (
    <div>
      <span style={{ position: 'relative', margin: '100px auto', display: 'block', textAlign: 'center', maxWidth: '70px' }}>
        Some Text
        <Tooltip
          dark
          active={true}
          position={'top'}>
          Hello!
        </Tooltip>
      </span>
    </div>
  ))
  .add('Transitions', () => (
    <TooltipWrapper />
  ))
