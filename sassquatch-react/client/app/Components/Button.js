import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from './Icon';

class Button extends Component {
  
  render() {

		let Tag = 'button';

		// Uses the Link component if the button has a path property
		if(this.props.path && !this.props.link){
			Tag = Link;
		}
		// Uses a basic anchor if the button has a link property
		if(this.props.link && !this.props.path){
			Tag = 'a';
		}

		let buttonText = this.props.children.trim().split(' ');

		// Attaches icons to the first/last word of the text so that they do not wrap independently.
		if(this.props.iconBefore || this.props.iconAfter){
			if(this.props.iconBefore){
				const iconBefore = (
					<Icon style={this.props.iconStyle} icon={this.props.iconBefore} />
				);
				buttonText[0] = '<span class="text--no-break"><i class="icon--before ' + this.props.iconBefore + '" aria-hidden="true"></i>' + buttonText[0] + '</span>';
			}
			if(this.props.iconAfter){
				const iconAfter = (
					<Icon style={this.props.iconStyle} icon={this.props.iconAfter} />
				)
				buttonText[buttonText.length - 1] = '<span class="text--no-break">' + buttonText[buttonText.length - 1]  + iconAfter + '</span>';
			}
		}

		let btnClasses = classNames({
			'btn': true,
			'btn--primary': this.props.type === 'primary',
			'btn--secondary': this.props.type === 'secondary',
			'btn--sm': this.props.size === 'small' || this.props.size === 'sm',
			'btn--lg': this.props.size === 'large' || this.props.size === 'lg',
		}, this.props.className);

		// Only one of (to, href) can be present at a time - if both are included on the component neither will appear and the tag will default to a button.
		const elementProps = {
			to: !this.props.link ? this.props.path : null,
			href: !this.props.path ? this.props.link : null
		}

    return (
      <Tag {...elementProps} className={btnClasses} onClick={this.props.onClick}>{buttonText}</Tag>
    );
  }

}

Button.propTypes = {
	className: PropTypes.string,
	type: PropTypes.oneOf(['primary', 'secondary']),
	size: PropTypes.oneOf(['sm', 'small', 'lg', 'large']),
	path: PropTypes.string,
	link: PropTypes.string,
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	iconStyle: PropTypes.oneOf(['light', 'regular', 'solid']),
	iconBefore: PropTypes.string,
	iconAfter: PropTypes.string,
};

export default Button;
