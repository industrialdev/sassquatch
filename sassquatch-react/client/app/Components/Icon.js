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

    return (
			<i className={iconClasses} aria-hidden="true"></i>
    );
  }

}

Icon.defaultProps = {
	iconStyle: 'regular'
};

Icon.propTypes = {
	before: PropTypes.boolean,
	after: PropTypes.boolean,
	className: PropTypes.string,
	iconStyle: PropTypes.oneOf(['light', 'regular', 'solid']),
	iconName: PropTypes.string.isRequired,
};

export default Icon;
