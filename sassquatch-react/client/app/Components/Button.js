import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconGroup from './IconGroup';

class Button extends Component {
  
  render() {

    let Tag = 'button';
    let children = this.props.children;

		// Uses the Link component if the button has a path property
		if(this.props.btnPath && !this.props.btnLink){
			Tag = Link;
		}
		// Uses a basic anchor if the button has a link property
		if(this.props.btnLink && !this.props.btnPath){
			Tag = 'a';
		}

    if (this.props.iconBefore || this.props.iconAfter) {
      children = (
        <IconGroup iconBefore={this.props.iconBefore} iconAfter={this.props.iconAfter} iconStyle={this.props.iconStyle}>
          {children}
        </IconGroup>
      );
    }
		
		let btnClasses = classNames({
			'btn': true,
			'btn--primary': this.props.btnStyle === 'primary',
			'btn--secondary': this.props.btnStyle === 'secondary',
			'btn--sm': this.props.btnSize === 'small' || this.props.btnSize === 'sm',
			'btn--lg': this.props.btnSize === 'large' || this.props.btnSize === 'lg',
		}, this.props.className);

		// Only one of (to, href) can be present at a time - if both are included on the component neither will appear and the tag will default to a button.
		const elementProps = {
			to: !this.props.btnLink ? this.props.btnPath : null,
			href: !this.props.btnPath ? this.props.btnLink : null,
			disabled: this.props.disabled
		}

    return (
      <Tag {...elementProps} className={btnClasses} onClick={this.props.onClick}>{children}</Tag>
    );
  }

}

Button.propTypes = {
	className: PropTypes.string,
	btnStyle: PropTypes.oneOf(['primary', 'secondary']),
	btnSize: PropTypes.oneOf(['sm', 'small', 'lg', 'large']),
	btnPath: PropTypes.string,
	btnLink: PropTypes.string,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	iconStyle: PropTypes.oneOf(['light', 'regular', 'solid']),
	iconBefore: PropTypes.string,
	iconAfter: PropTypes.string,
	disabled: PropTypes.bool
};

export default Button;
