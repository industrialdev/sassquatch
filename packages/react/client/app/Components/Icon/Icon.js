import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';


/** Icon component description */
class Icon extends Component {
  
  render() {

		let iconClasses = classNames({
			fal: this.props.iconStyle === 'light',
			far: this.props.iconStyle === 'regular',
			fas: this.props.iconStyle === 'solid',
			fa: !this.props.iconStyle,
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

Icon.propTypes = {
	/** Additional class names that do not get defined by another prop */
	className: PropTypes.string,
	/** Sets right margin to the icon */
	before: PropTypes.bool,
	/** Sets left margin to the icon */
	after: PropTypes.bool,
	/** Fontawesome Pro icon style, determines the icon prefix ie: far. Leave blank for free version of Fontawesome */
	iconStyle: PropTypes.oneOf(['light', 'regular', 'solid']),
	/** Name of the Fontawesome icon to be used */
	iconName: PropTypes.string.isRequired,
	/** The accessible label you want to be read by screen readers */
	label: PropTypes.string
};

export default Icon;
