import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { setDefaults, withInfo } from '@storybook/addon-info';

import Button from './Button';

setDefaults({
  header: false,
  inline: true,
  maxPropsIntoLine: 10,
  styles: {},
});

storiesOf('Button', module)
  .add('Usage',
    withInfo(`
      The button component can be used for various actions such as calling a function, linking internally/externally, or controlling other components like the dropdown.
    `)(() =>
      <Button btnSize="large" btnStyle="primary" link="http://sassquatch.ca/" iconBefore="info-circle" iconStyle="solid">Example Button</Button>
    )
  )
	.add('Examples', () => (
    <>
      <h2>Styles</h2>
  		<p>
  			<Button>Default Button</Button>
  			<Button btnStyle="primary">Primary Button</Button>
  			<Button btnStyle="secondary">Secondary Button</Button>
  			<Button disabled>Disabled Button</Button>
      </p>
      <h2>Sizes</h2>
      <p>
        <Button btnSize="large">Large Button</Button>
        <Button>Default Button</Button>
        <Button btnSize="small">Small Button</Button>
      </p>
      <h2>Icons</h2>
      <p>
        <Button iconBefore="info-circle">Icon Before</Button>
        <Button iconBefore="info-circle" iconAfter="info-circle">Icon Before and After</Button>
        <Button iconAfter="info-circle">Icon After</Button>
      </p>
      <p>
        <Button iconBefore="info-circle" iconStyle="regular">Regular Icon Style</Button>
        <Button iconBefore="info-circle" iconStyle="light">Light Icon Style</Button>
        <Button iconBefore="info-circle" iconStyle="solid">Solid Icon Style</Button>
      </p>
    </>
  ));
