import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/modal.js');
  require('../stories/tooltip.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
