import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

class Icon extends Component {
  
  render() {

		let iconClasses = classNames({
			far: this.props.iconStyle != 'solid' && this.props.iconStyle != 'light',
			fas: this.props.iconStyle === 'solid',
			fal: this.props.iconStyle === 'light',
			'icon--before': this.props.before,
			'icon--after': this.props.after
		}, [`fa-${this.props.iconName}`], this.props.className);

    return (
			<i className={iconClasses} aria-hidden="true"></i>
    );
  }

}

Icon.propTypes = {
	before: PropTypes.boolean,
	after: PropTypes.boolean,
	className: PropTypes.string,
	iconStyle: PropTypes.oneOf(['light', 'solid']),
	iconName: PropTypes.string.isRequired,
};

export default Icon;
