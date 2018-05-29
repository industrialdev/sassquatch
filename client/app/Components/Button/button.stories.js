import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

function handleClick(){
  alert('clicked');
}

storiesOf('Button', module)
  .add('Default', 
    withInfo(`
      The Default Button style has minimal styling applied to it.
    `)(() =>
      <Button>Default Button</Button>
    )
  )
  .add('Primary', 
    withInfo(`
      The Primary Button style is styled using the primary brand color.
    `)(() =>
      <Button btnStyle="primary">Primary Button</Button>
    )
  )
  .add('Secondary', 
    withInfo(`
      The Secondary Button style is styled using the secondary brand color.
    `)(() =>
      <Button btnStyle="secondary">Secondary Button</Button>
    )
  )
  .add('Disabled', 
    withInfo(`
      A disabled button cannot be interacted with.
    `)(() =>
      <Button disabled>Disabled Button</Button>
    )
  )
  .add('Large', 
    withInfo(`
      The Large Button size can be used to increase emphasis on the button.
    `)(() =>
      <Button btnSize="large">Large Button</Button>
    )
  )
  .add('Small', 
    withInfo(`
      The Small Button size can be used to reduce emphasis on the button.
    `)(() =>
      <Button btnSize="small">Small Button</Button>
    )
  )
  .add('With Icon Before', 
    withInfo(`
      An icon added before will be attached to the first word in the button so that it does not wrap on its own.
    `)(() =>
      <Button iconBefore="info-circle">Button With Icon Before</Button>
    )
  )
  .add('With Icon After', 
    withInfo(`
      An icon added after will be attached to the last word in the button so that it does not wrap on its own.
    `)(() =>
      <Button iconAfter="info-circle">Button With Icon After</Button>
    )
  )
  .add('Linked', 
    withInfo(`
      The Button can be linked in two different ways. Internally using the 'path' property, or externally using the 'link' property. The 'path' property uses react router to apply a link to the button.
    `)(() =>
      <Button link="http://sassquatch.ca/">Linked Button</Button>
    )
  )
  .add('Click', 
    withInfo(`
      onClick can be used to call a custom function.
    `)(() =>
      <Button onClick={handleClick}>Button With Click Function</Button>
    )
  );
