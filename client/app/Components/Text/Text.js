import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/** Text component description */
export default function Text(props) {
  const {
    alignment,
    capitalized,
    italicized,
    ellipsis,
    noBreak,
    children,
    ...otherProps
  } = props;
  
  const className = classNames({
    'text--centered': props.alignment === 'center',
    'text--right': props.alignment === 'right',
    'text--caps': props.capitalized,
    'text--italic': props.italicized,
    'text--no-break': props.noBreak,
    'text--ellipsis': props.ellipsis
  }, props.className);

  return <span {...otherProps} className={className}>{children}</span>;
}

Text.propTypes = {
  /** Sets alignment of the text */
  alignment: PropTypes.oneOf(['right', 'center']),
  /** Capitalizes the text */
  capitalized: PropTypes.bool,
  /** Italicizes the text */
  italicized: PropTypes.bool,
  /** Prevents the text from wrapping */
  noBreak: PropTypes.bool,
  /** Prevents the text from wrapping and appends an ellipsis '...' when the text no longer fits in view */
  ellipsis: PropTypes.bool,
};