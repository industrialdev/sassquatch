import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Parser from 'html-react-parser';

class Button extends Component {
  
  render() {

		let Tag = 'button';

		// Uses the Link component if the button has a link property
		if(this.props.path && !this.props.link){
			Tag = Link;
		}

		if(this.props.link && !this.props.path){
			Tag = 'a';
		}

		let buttonText = this.props.children;

		// Attaches icons to the first/last word of the text so that they do not wrap independently.
		if(this.props.iconBefore || this.props.iconAfter){
			buttonText = this.props.children.trim().split(' ');
			if(this.props.iconBefore){
				buttonText[0] = '<span class="text--no-break"><i class="icon--before ' + this.props.iconBefore + '" aria-hidden="true"></i>' + buttonText[0] + '</span>';
			}
			if(this.props.iconAfter){
				buttonText[buttonText.length - 1] = '<span class="text--no-break">' + buttonText[buttonText.length - 1] + '<i class="icon--after ' + this.props.iconAfter + '" aria-hidden="true"></i></span>';
			}
			buttonText = buttonText.join(' ');
		}

		let btnClasses = classNames({
			'btn': true,
			'btn--primary': this.props.type === 'primary',
			'btn--secondary': this.props.type === 'secondary',
			'btn--sm': this.props.size === 'small' || this.props.size === 'sm',
			'btn--lg': this.props.size === 'large' || this.props.size === 'lg',
		}, this.props.className);

    return (
      <Tag {...(!this.props.link ? {to: this.props.path} : {})} {...(!this.props.path ? {href: this.props.link} : {})} className={btnClasses} onClick={this.props.onClick}>{Parser(buttonText)}</Tag>
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
	iconBefore: PropTypes.string,
	iconAfter: PropTypes.string
};

export default Button;
