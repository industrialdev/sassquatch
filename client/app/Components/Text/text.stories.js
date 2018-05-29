import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Text from './Text';

storiesOf('Text', module)
  .add('Default',
    withInfo(`
      The Text component can be used to apply specific formatting to a string of text.
    `)(() =>
      <Text>Default Text Component</Text>
    )
  )
  .add('Right Aligned',
    withInfo(`
      By default the text component will align left. The 'alignment' property can be used to align the text either right or center.
    `)(() =>
      <Text alignment="right">Right Aligned Text Component</Text>
    )
  )
  .add('Center Aligned',
    withInfo(`
      By default the text component will align left. The 'alignment' property can be used to align the text either right or center.
    `)(() =>
      <Text alignment="center">Center Aligned Text Component</Text>
    )
  )
  .add('Capitalized',
    withInfo(`
      Simply capitalizes all the text.
    `)(() =>
      <Text capitalized>Capitalized Text Component</Text>
    )
  )
  .add('Italicized',
    withInfo(`
      Simply italicizes all the text.
    `)(() =>
      <Text italicized>Italicized Text Component</Text>
    )
  )
  .add('No Break',
    withInfo(`
      A Text component with noBreak will not wrap to new lines.
    `)(() =>
      <Text noBreak>Text Component With No Break</Text>
    )
  )
  .add('Ellipsis',
    withInfo(`
      Similar to No Break, Ellipsis will prevent the text from wrapping to a new line. It will also append an ellipsis '...' when the text no longer fits in view.
    `)(() =>
      <Text ellipsis>Text Component With Ellipsis</Text>
    )
  );
