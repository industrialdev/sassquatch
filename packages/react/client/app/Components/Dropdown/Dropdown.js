import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button';

/** Dropdown component description */
class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		}
		this.toggleDropdown = this.toggleDropdown.bind(this)
	}

	toggleDropdown(event) {
    let dropdownToggle = event.currentTarget;
    let dropdownContent = dropdownToggle.nextSibling;
    if(!this.state.open) {
			dropdownContent.style.height = dropdownContent.scrollHeight + 'px';
    }else{
			dropdownContent.style.height = '0px';
    }
    this.setState({ open: !this.state.open });
  }
  
  render() {

		let wrapperClasses = classNames({
			'dropdown': true
		}, this.props.className);

		let btnClasses = classNames({
			'button--primary': this.props.btnStyle === 'primary',
			'button--secondary': this.props.btnStyle === 'secondary',
			'button--small': this.props.btnSize === 'small' || this.props.btnSize === 'sm',
			'button--large': this.props.btnSize === 'large' || this.props.btnSize === 'lg',
			'dropdown__toggle': true,
			'open': this.state.open === true
		});

		let contentClasses = classNames({
			'dropdown__content': true,
			'dropdown__content--small': this.props.btnSize === 'small' || this.props.btnSize === 'sm',
			'dropdown__content--large': this.props.btnSize === 'large' || this.props.btnSize === 'lg',
			'dropdown__content--overlay': this.props.overlay,
			'open': this.state.open === true
		});

		const btnProps = {
			'aria-expanded': this.state.open,
			'disabled': this.props.disabled,
		}

		const contentProps = {
			'aria-expanded': this.state.open,
			'aria-hidden': this.state.open ? null : true,
		}

    return (
      <div className={wrapperClasses}>
				<Button {...btnProps} className={btnClasses} onClick={this.toggleDropdown} iconAfter="angle-down">{this.props.btnLabel}</Button>
				<div {...contentProps} className={contentClasses}>
					<div className="dropdown__content-wrapper">
						{this.props.children}
					</div>
				</div>
			</div>
    );
  }
}

Dropdown.propTypes = {
	/** What will appear in the content of the dropdown */
	children: PropTypes.node.isRequired,
	/** Additional class names that do not get defined by another prop */
	className: PropTypes.string,
	/** The text that will appear in the toggle button */
	btnLabel: PropTypes.string.isRequired,
	/** Determines what the button will look like */
	btnStyle: PropTypes.oneOf(['primary', 'secondary']),
	/** Determines the size of the button */
	btnSize: PropTypes.oneOf(['sm', 'small', 'lg', 'large']),
	/** Controls the disabled state of the button */
	disabled: PropTypes.bool,
	/** Makes the dropdown overlap other content on the page */
	overlay: PropTypes.bool
};

export default Dropdown;


