import React, { Fragment } from 'react';
import Icon from './Icon';
import Text from './Text';
import PropTypes from 'prop-types';

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
    <Fragment>
      {beforeElement}
      {mainElement}
      {afterElement}
    </Fragment>
  );
}

IconGroup.defaultProps = {
  iconStyle: "regular",
  noBreak: true
}

IconGroup.propTypes = {
  children: PropTypes.node.isRequired,
  iconBefore: PropTypes.string,
  iconAfter: PropTypes.string,
  iconStyle: PropTypes.string,
  noBreak: PropTypes.bool
}
