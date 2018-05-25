import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';

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

		const contentProps = {
			'aria-hidden': this.state.open ? null : true,
		}

    return (
      <div className="dropdown">
				<Button className={btnClasses} onClick={this.toggleDropdown} iconAfter="angle-down">Dropdown</Button>
				<div {...contentProps} className={contentClasses}>This is a test</div>
			</div>
    );
  }
}

Dropdown.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Dropdown;
