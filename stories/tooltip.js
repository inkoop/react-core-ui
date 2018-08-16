import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links'
import { Modal } from '../components/modal';
import { Tooltip } from '../components/tooltip';

storiesOf('Tooltip', module)
  .add('Closed Tooltip', () => (
    <div>
      <span style={{ position: 'relative' }}>
        Some Text
        <Tooltip
          active={false}
          position={'right'}>
          Hello!
        </Tooltip>
      </span>
    </div>
  ))
  .add('Open Right', () => (
    <div>
      <span style={{ position: 'relative' }}>
        Some Text
        <Tooltip
          active={true}
          position={'right'}>
          Hello!
        </Tooltip>
      </span>
    </div>
  ))
