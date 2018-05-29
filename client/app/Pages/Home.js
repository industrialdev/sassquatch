import React, { Component } from 'react';

import Dropdown from '../Components/Dropdown/Dropdown';

class Home extends Component {
  render() {
    return (
      <>
        <h2>Dropdowns</h2>
        <Dropdown btnLabel="Dropdown Example">This is a test</Dropdown>
      </>
    );
  }
}

export default Home;
