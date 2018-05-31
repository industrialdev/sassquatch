import React from 'react';

import { storiesOf } from '@storybook/react'; 
import { withInfo } from '@storybook/addon-info';

import Icon from './Icon';
import IconGroup from './IconGroup';

storiesOf('Icon', module)
  .add('Regular',
    withInfo(`
      The Icon component uses the Fontawesome library and can be set by using the hyphen separated name of the icon.
    `)(() =>
      <Icon iconName="info-circle" iconStyle="regular" />
    )
  )
  .add('Light',
    withInfo(`
      Fontawesome Pro provides 3 different styles of each icon 'Regular', 'Light', and 'Solid'. If the free version of Fontawesome is being used the iconStyle property should be omitted.
    `)(() =>
      <Icon iconName="info-circle" iconStyle="light" />
    )
  )
  .add('Solid',
    withInfo(`
      Fontawesome Pro provides 3 different styles of each icon 'Regular', 'Light', and 'Solid'. If the free version of Fontawesome is being used the iconStyle property should be omitted.
    `)(() =>
      <Icon iconName="info-circle" iconStyle="solid" />
    )
  )
  .add('With Margin Right',
    withInfo(`
      If you are not using an Icon Group you can set margin on the Icon to separate it from accompanying text. 'Before' will apply margin on the right side of the icon.
    `)(() =>
      <div>
        <Icon iconName="info-circle" before />Icon before text.
      </div>
    )
  )
  .add('With Margin Left',
    withInfo(`
      If you are not using an Icon Group you can set margin on the Icon to separate it from accompanying text. 'After' will apply margin on the left side of the icon.
    `)(() =>
      <div>
        Icon after text.<Icon iconName="info-circle" after />
      </div>
    )
  )
  .add('With Accessible Label',
    withInfo(`
      If your icon is not accompanied by another element which gives the icon context you should provide a label. The 'Label' property will provide a string which is only read by a screen reader.
    `)(() =>
      <div>
        <Icon iconName="info-circle" label="This text will be read by a screen reader." />
      </div>
    )
  )
  .add('Icon Group',
    withInfo(`
      The Icon Group is used to attach multiple icons to a single grouping of elements. If the contents of IconGroup are a string then the icons will be attached to the first and/or last word.
    `)(() =>
      <IconGroup iconBefore="info-circle" iconAfter="info-circle">
        Example Icon Group
      </IconGroup>
    )
  );
  

