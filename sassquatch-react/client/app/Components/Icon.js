import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

class Icon extends Component {
  
  render() {

    return (
			<i></i>
    );
  }

}

Icon.propTypes = {
	iconStyle: PropTypes.oneOf(['light', 'regular', 'solid']),
	icon: PropTypes.string,
};

export default Icon;
