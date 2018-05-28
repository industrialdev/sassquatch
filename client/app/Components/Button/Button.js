import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconGroup from '../Icon/IconGroup';

/** Button component description */
class Button extends Component {
  
  render() {

    let Tag = 'button';
    let children = this.props.children;

    if (this.props.iconBefore || this.props.iconAfter) {
      children = (
        <IconGroup iconBefore={this.props.iconBefore} iconAfter={this.props.iconAfter} iconStyle={this.props.iconStyle}>
          {children}
        </IconGroup>
      );
    }

    // Uses the Link component if the button has a path property
		if(this.props.path && !this.props.link){
			Tag = Link;
		}

    // Uses a basic anchor if the button has a link property
		if(this.props.link && !this.props.path){
			Tag = 'a';
			children = (
				<>
					{children}
					<span className="webaim-hidden">Opens in a new window</span>
				</>
			);
		}
		
		let btnClasses = classNames({
			'button': true,
			'button--primary': this.props.btnStyle === 'primary',
			'button--secondary': this.props.btnStyle === 'secondary',
			'button--small': this.props.btnSize === 'small' || this.props.btnSize === 'sm',
			'button--large': this.props.btnSize === 'large' || this.props.btnSize === 'lg',
		}, this.props.className);

		// Only one of (to, href) can be present at a time - if both are included on the component neither will appear and the tag will default to a button.
		const elementProps = {
			to: !this.props.link ? this.props.path : null,
			href: !this.props.path ? this.props.link : null,
			disabled: this.props.disabled,
			'aria-expanded': this.props.ariaExpanded,
			target: this.props.link ? '_blank' : null,
		}

    return (
      <Tag {...elementProps} className={btnClasses} onClick={this.props.onClick}>{children}</Tag>
    );
  }

}

Button.propTypes = {
	/** Elements that will appear inside the button */
	children: PropTypes.node.isRequired,
	/** Additional class names that do not get defined by another prop */
	className: PropTypes.string,
	/** Determines what the button will look like */
	btnStyle: PropTypes.oneOf(['primary', 'secondary']),
	/** Determines the size of the button */
	btnSize: PropTypes.oneOf(['sm', 'small', 'lg', 'large']),
	/** Defines an internal path that the button should link to - used with react router */
	path: PropTypes.string,
	/** Defines an external path that the button should link to */
	link: PropTypes.string,
	/** Function that is passed to the onClick event of the button */
	onClick: PropTypes.func,
	/** Fontawesome Pro icon style, determines the icon prefix ie: far */
	iconStyle: PropTypes.oneOf(['light', 'regular', 'solid']),
	/** Name of the Fontawesome icon to appear before the contents of the button */
	iconBefore: PropTypes.string,
	/** Name of the Fontawesome icon to appear after the contents of the button */
	iconAfter: PropTypes.string,
	/** Controls the disabled state of the button */
	disabled: PropTypes.bool,
	/** For use in combination with the Dropdown component to tell the screen reader the opened/closed state of the dropdown */
	ariaExpanded: PropTypes.bool,
};

export default Button;
