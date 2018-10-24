import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon/Icon';

/** Alert component description */
class Alert extends Component {
  
  render() {
		
		let alertClasses = classNames({
			alert: true,
			'alert--warning': this.props.alertStyle === 'warning',
			'alert--danger': this.props.alertStyle === 'danger',
			'alert--success': this.props.alertStyle === 'success',
			'alert--has-icon': this.props.iconName
		}, this.props.className);

		let alertIcon = '';

		if(this.props.iconName){
			alertIcon = (
				<Icon className="alert__icon" iconName={this.props.iconName} iconStyle={this.props.iconStyle} />
			);
		}

    return (
			<div className={alertClasses}>
				{alertIcon}
				{this.props.children}
			</div>
    );
  }

}

Alert.defaultProps = {
	alertStyle: 'default',
	iconStyle: 'regular'
}

Alert.propTypes = {
	/** Elements that will appear inside the alert */
	children: PropTypes.node.isRequired,
	/** Additional class names that do not get defined by another prop */
	className: PropTypes.string,
	/** Determines what the alert will look like, provides context to the alert */
	alertStyle: PropTypes.oneOf(['default', 'warning', 'danger', 'success']),
	/** Fontawesome Pro icon style, determines the icon prefix ie: far */
	iconStyle: PropTypes.oneOf(['light', 'regular', 'solid']),
	/** Name of the Fontawesome icon to appear before the contents of the alert */
	iconName: PropTypes.string,
};

export default Alert;
