import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';

// Info defaults:
setDefaults({
  header: false,
  inline: true,
  maxPropsIntoLine: 10,
  styles: {},
});

// Option defaults:
setOptions({
	name: 'Sassquatch Storybook',
	showAddonPanel: false,
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
