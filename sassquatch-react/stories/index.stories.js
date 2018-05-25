import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../../sassquatch-theme/src/assets/styles/sassquatch.scss';

import Button from '../client/app/Components/Button';

storiesOf('Button', module)
  .add('Sizes', () => (
		<p>
			<Button btnSize="large">Large Button</Button>
			<Button>Default Button</Button>
			<Button btnSize="small">Small Button</Button>
    </p>
  ))
  .add('Styles', () => (
		<p>
			<Button>Default Button</Button>
			<Button btnStyle="primary">Primary Button</Button>
			<Button btnStyle="secondary">Secondary Button</Button>
    </p>
  ));
