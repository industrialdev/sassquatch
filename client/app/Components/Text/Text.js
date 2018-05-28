import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Text(props) {
  const {
    noBreak,
    children,
    ...otherProps
  } = props;
  
  const className = classNames({
    'text--no-break': props.noBreak
  }, props.className);

  return <span {...otherProps} className={className}>{children}</span>;
}

Text.propTypes = {
  noBreak: PropTypes.bool
};
