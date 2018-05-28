import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button';

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
			'ariaExpanded': this.state.open,
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
	btnLabel: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Dropdown;
