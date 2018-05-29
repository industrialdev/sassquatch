import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Dropdown from './Dropdown';

storiesOf('Dropdown', module)
  .add('Default', 
    withInfo(`
      By default the dropdown component must have a button label aswell as contents for the dropdown.
    `)(() =>
      <Dropdown btnLabel="Default Dropdown">Example Dropdown Content</Dropdown>
    )
  )
  .add('Primary', 
    withInfo(`
      The Dropdown component accepts all the same button styles as the button component.
    `)(() =>
      <Dropdown btnLabel="Primary Dropdown" btnStyle="primary">Example Dropdown Content</Dropdown>
    )
  )
  .add('Secondary', 
    withInfo(`
      The Dropdown component accepts all the same button styles as the button component.
    `)(() =>
      <Dropdown btnLabel="Secondary Dropdown" btnStyle="secondary">Example Dropdown Content</Dropdown>
    )
  )
  .add('Large', 
    withInfo(`
      The Dropdown component accepts all the same button sizes as the button component.
    `)(() =>
      <Dropdown btnLabel="Large Dropdown" btnSize="large">Example Dropdown Content</Dropdown>
    )
  )
  .add('Small', 
    withInfo(`
      The Dropdown component accepts all the same button sizes as the button component.
    `)(() =>
      <Dropdown btnLabel="Small Dropdown" btnSize="small">Example Dropdown Content</Dropdown>
    )
  )
  .add('Overlayed', 
    withInfo(`
      The Overlay property allows the dropdown to overlap other content on the page.
    `)(() =>
      <Dropdown btnLabel="Overlayed Dropdown" overlay>Example Dropdown Content</Dropdown>
    )
  );
