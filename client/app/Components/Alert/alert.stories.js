import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Alert from './Alert';

storiesOf('Alert', module)
  .add('Default',
    withInfo(`
      The default alert should be used for displaying general information to the user.
    `)(() =>
      <Alert>Default Alert</Alert>
    )
  )
  .add('Warning',
    withInfo(`
      The warning alert should be used for displaying important information to the user that may not need to be actioned.
    `)(() =>
      <Alert alertStyle="warning">Warning Alert</Alert>
    )
  )
  .add('Danger',
    withInfo(`
      The danger alert should be used for displaying important information to the user that needs to be actioned.
    `)(() =>
      <Alert alertStyle="danger">Danger Alert</Alert>
    )
  )
  .add('Success',
    withInfo(`
      The success alert should be used for displaying information to the user such as a form being submitted.
    `)(() =>
      <Alert alertStyle="success">Success Alert</Alert>
    )
  )
  .add('With Icon',
    withInfo(`
      Icons can be added to any alert using the Fontawesome icon library
    `)(() =>
      <Alert iconName="info-circle" iconStyle="solid">Alert With Icon</Alert>
    )
  );
