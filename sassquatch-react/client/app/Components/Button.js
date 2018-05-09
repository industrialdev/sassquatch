import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

class Button extends Component {
  
  render() {

		let mods = '';

		// Loops over the modifiers array prop and creates a list of prefixed classes
		if(this.props.modifiers){
			this.props.modifiers.map(function(value, i){
				let prefix = "";
				// no space on the first class in the array
				if (i != 0){
					prefix = " ";
				}
				mods += prefix + "btn--" + value;
			});
		}

		let btnClasses = classNames({
			btn: true,
			[`${mods}`]: this.props.modifiers,
		});

    return (
      <button className={btnClasses} onClick={this.props.onClick}>{this.props.children}</button>
    );
  }

}

Button.propTypes = {
	modifiers: PropTypes.array,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func
};

export default Button;
