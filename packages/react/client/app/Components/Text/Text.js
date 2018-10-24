import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

/** Text component description */
class Text extends Component {

  render() {

    let textClasses = classNames({
      'text--centered': this.props.alignment === 'center',
      'text--right': this.props.alignment === 'right',
      'text--caps': this.props.capitalized,
      'text--italic': this.props.italicized,
      'text--no-break': this.props.noBreak,
      'text--ellipsis': this.props.ellipsis
    }, this.props.className);

    return (
      <span className={textClasses}>{this.props.children}</span>
    )
  }
}

Text.propTypes = {
  /** Text that the properties will be applied to */
  children: PropTypes.node.isRequired,
  /** Additional class names that do not get defined by another prop */
  className: PropTypes.string,
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

export default Text;
