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

	toggleDropdown() {
    this.setState({ open: !this.state.open });
  }
  
  render() {

		let btnClasses = classNames({
			'dropdown__toggle': true,
			'open': this.state.open === true
		});

		let contentClasses = classNames({
			'dropdown__content': true,
			'open': this.state.open === true
		});

		const btnProps = {
			'aria-expanded': this.state.open,
		}

		const contentProps = {
			'aria-expanded': this.state.open,
			'aria-hidden': this.state.open ? null : true,
		}

    return (
      <div className="dropdown">
				<Button {...btnProps} className={btnClasses} onClick={this.toggleDropdown} iconAfter="angle-down">{this.props.btnLabel}</Button>
				<div {...contentProps} className={contentClasses}>{this.props.children}</div>
			</div>
    );
  }
}

Dropdown.propTypes = {
	/** The text you that will appear in the toggle button */
	btnLabel: PropTypes.string.isRequired,
	/** What will appear in the content of the dropdown */
	children: PropTypes.node.isRequired,
};

export default Dropdown;
