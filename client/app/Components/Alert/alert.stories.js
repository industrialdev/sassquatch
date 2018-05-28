import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { setDefaults, withInfo } from '@storybook/addon-info';

import Alert from './Alert';

setDefaults({
  header: false,
  inline: true,
  maxPropsIntoLine: 10,
  styles: {},
});

storiesOf('Alert', module)
  .add('Usage',
    withInfo(`
      The alert component can be used to display important messages to the user.
    `)(() =>
      <Alert iconName="check-circle" iconStyle="solid" alertStyle="success">Example Alert</Alert>
    )
  )
  .add('Examples', () => (
    <>
      <Alert iconName="info-circle" iconStyle="solid">This is a default alert</Alert>
      <Alert iconName="exclamation-triangle" iconStyle="solid" alertStyle="warning">This is a warning alert</Alert>
      <Alert iconName="exclamation-circle" iconStyle="solid" alertStyle="danger">This is a danger alert</Alert>
      <Alert iconName="check-circle" iconStyle="solid" alertStyle="success">This is a success alert</Alert>
    </>
  ));
