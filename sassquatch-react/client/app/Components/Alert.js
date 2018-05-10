import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from './Icon';

class Alert extends Component {
  
  render() {
		
		let alertClasses = classNames({
			alert: true,
			'alert--warning': this.props.alertStyle === 'warning',
			'alert--danger': this.props.alertStyle === 'danger',
			'alert--success': this.props.alertStyle === 'success',
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
	iconStyle: 'regular'
}

Alert.propTypes = {
	className: PropTypes.string,
	alertStyle: PropTypes.oneOf(['warning', 'danger', 'success']),
	children: PropTypes.node.isRequired,
	iconStyle: PropTypes.oneOf(['light', 'regular', 'solid']),
	iconName: PropTypes.string,
};

export default Alert;
