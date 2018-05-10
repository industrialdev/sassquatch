import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

class Icon extends Component {
  
  render() {

		let iconClasses = classNames({
			fal: this.props.iconStyle === 'light',
			far: this.props.iconStyle === 'regular',
			fas: this.props.iconStyle === 'solid',
			'icon--before': this.props.before,
			'icon--after': this.props.after
		}, [`fa-${this.props.iconName}`], this.props.className);

		// Only one of (to, href) can be present at a time - if both are included on the component neither will appear and the tag will default to a button.
		const elementProps = {
			'aria-hidden': !this.props.label ? true : null,
			'aria-label': this.props.label
		}

    return (
			<i className={iconClasses} {...elementProps}></i>
    );
  }

}

Icon.defaultProps = {
	iconStyle: 'regular'
};

Icon.propTypes = {
	before: PropTypes.bool,
	after: PropTypes.bool,
	className: PropTypes.string,
	iconStyle: PropTypes.oneOf(['light', 'regular', 'solid']),
	iconName: PropTypes.string.isRequired,
	label: PropTypes.string
};

export default Icon;
