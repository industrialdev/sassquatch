import React, { Component } from 'react';

import Button from '../Components/Button';

class Home extends Component {
  buttonHandleClick(event) {
    event.preventDefault();
    alert('Example of a click event passed to a button');
  }
  render() {
    return (
      <>
        <p>
          <Button btnSize="large" onClick={this.buttonHandleClick.bind(this)}>Large Button</Button>
          <Button onClick={this.buttonHandleClick.bind(this)}>Default Button</Button>
          <Button btnSize="small" onClick={this.buttonHandleClick.bind(this)}>Small Button</Button>
        </p>
        <p>
          <Button btnPath="/counter">Internally Linked button</Button>
          <Button btnLink="https://industrialagency.ca">Externally Linked button</Button>
          <Button btnType="primary" onClick={this.buttonHandleClick.bind(this)}>Primary Button</Button>
          <Button btnType="secondary" onClick={this.buttonHandleClick.bind(this)}>Secondary Button</Button>
          <Button iconBefore="info-circle">Button with icon before</Button>
          <Button iconAfter="info-circle" iconStyle="solid">Button with icon after</Button>
          <Button iconBefore="info-circle" iconAfter="info-circle" iconStyle="light">Button with icon before and after</Button>
        </p>
      </>
    );
  }
}

export default Home;
