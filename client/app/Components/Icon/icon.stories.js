import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { setDefaults, withInfo } from '@storybook/addon-info';

import Icon from './Icon';
import IconGroup from './IconGroup';

setDefaults({
  header: false,
  inline: true,
  maxPropsIntoLine: 10,
  styles: {},
});

storiesOf('Icon', module)
  .add('Usage',
    withInfo(`
      The icon component uses the Fontawesome library to display an icon. An icon reference guide can be found [here](https://fontawesome.com/icons?d=gallery).
    `)(() =>
      <Icon iconName="info-circle" iconStyle="solid" label="Label for screen readers"  />
    )
  )
	.add('Examples', () => (
    <>
      <p><Icon iconName="info-circle" label="Label for screen readers"  />This icon has a label that will be read to a screen reader.</p>
      <p><Icon iconName="info-circle" />This icon is hidden to screen readers.</p>
      <p><Icon iconName="info-circle" iconStyle="regular" />Regular Icon Style.</p>
      <p><Icon iconName="info-circle" iconStyle="light" />Light Icon Style.</p>
      <p><Icon iconName="info-circle" iconStyle="solid" />Solid Icon Style.</p>
      <p><Icon iconName="info-circle" before/>Icon with 'Before' prop.</p>
      <p>Icon with 'After' prop.<Icon iconName="info-circle" after/></p>
      <p> Icon with both 'Before'<Icon iconName="plus-circle" label="and" before after/>'After' props.</p>
    </>
  ));

storiesOf('Icon Group', module)
  .add('Usage',
    withInfo(`
      The icon group component is used to attach multiple icons to a single grouping of elements. If the contents of IconGroup are a string then the icons will be attached to the first and/or last word.
    `)(() =>
      <IconGroup iconBefore="info-circle" iconAfter="info-circle" iconStyle="regular">
        Example Icon Group
      </IconGroup>
    )
  )
  .add('Examples', () => (
    <>

    </>
  ));

