import React from 'react';
import Icon from './Icon';
import Text from '../Text/Text';
import PropTypes from 'prop-types';

/** IconGroup component description */
export default function IconGroup(props) {
  const {
    children,
    iconBefore,
    iconAfter,
    iconStyle,
    noBreak
  } = props;

  let beforeElement = Boolean(iconBefore) && <Icon iconName={iconBefore} iconStyle={iconStyle} before />;
  let afterElement = Boolean(iconAfter) && <Icon iconName={iconAfter} iconStyle={iconStyle} after />;
  let mainElement = children;

  // If chilren is a plain string and noBreak is enabled
  if (typeof children === 'string' && noBreak) {
    const firstIndex = children.indexOf(' ');
    const lastIndex = children.lastIndexOf(' ');
    const isTwoWordsOrLess = firstIndex === lastIndex;

    // Two words or less with both before + end icons is a special case,
    // can use noBreak as the main element.
    if (isTwoWordsOrLess && iconBefore && iconAfter) {
      return (
        <Text noBreak>
          {beforeElement}
          {children}
          {afterElement}
        </Text>
      );
    } else {
      // More then two words with both icons, noBreak the first and last elements
      let start = children.slice(0, firstIndex + 1);
      let end = children.slice(lastIndex);

      if (beforeElement) {
        beforeElement = <Text noBreak>{beforeElement}{start}</Text>;
      } else {
        beforeElement = start;
      }

      if (afterElement) {
        afterElement = <Text noBreak>{end}{afterElement}</Text>;
      } else {
        afterElement = end;
      }

      // Middle part of string
      mainElement = children.slice(firstIndex + 1, lastIndex); 
    }
  }

  return (
    <React.Fragment>
      {beforeElement}
      {mainElement}
      {afterElement}
    </React.Fragment>
  );
}

IconGroup.defaultProps = {
  noBreak: true
}

IconGroup.propTypes = {
  /** Elements that will appear inside the alert */
  children: PropTypes.node.isRequired,
  /** Name of the icon that will appear before the children. */
  iconBefore: PropTypes.string,
  /** Name of the icon that will appear after the children. */
  iconAfter: PropTypes.string,
  /** Fontawesome Pro icon style, determines the icon prefix ie: far */
  iconStyle: PropTypes.oneOf(['light', 'regular', 'solid']),
  /** Passed to the Text component if children is a string of text. Prevents the icon from breaking to a new line on its own. */
  noBreak: PropTypes.bool
}
