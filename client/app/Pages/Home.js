import React, { Component } from 'react';

import Button from '../Components/Button/Button';
import Icon from '../Components/Icon/Icon';
import Alert from '../Components/Alert/Alert';
import Dropdown from '../Components/Dropdown/Dropdown';

class Home extends Component {
  buttonHandleClick(event) {
    event.preventDefault();
    alert('Example of a click event passed to a button');
  }
  render() {
    return (
      <>
        <h2>Dropdowns</h2>
        <Dropdown>This is a test</Dropdown>
      </>
    );
  }
}

export default Home;
