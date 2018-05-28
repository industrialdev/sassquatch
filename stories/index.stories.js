
import '../assets/styles/sassquatch.scss';

import { configure } from '@storybook/react';

const req = require.context('../client/app/Components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);