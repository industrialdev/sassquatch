import React, { Component } from 'react';

import Button from '../Components/Button';

class Home extends Component {
  buttonHandleClick() {
    alert('Example of a click event passed to a button');
  }
  render() {
    return (
      <>
        <p>
          <Button modifiers={["sm"]} onClick={this.buttonHandleClick.bind(this)}>Small Button</Button>
          <Button modifiers={["primary", "sm"]} onClick={this.buttonHandleClick.bind(this)}>Small Primary Button</Button>
          <Button modifiers={["secondary", "sm"]} onClick={this.buttonHandleClick.bind(this)}>Small Secondary Button</Button>
        </p>
        <p>
          <Button onClick={this.buttonHandleClick.bind(this)}>Default Button</Button>
          <Button modifiers={["primary"]} onClick={this.buttonHandleClick.bind(this)}>Default Primary Button</Button>
          <Button modifiers={["secondary"]} onClick={this.buttonHandleClick.bind(this)}>Default Secondary Button</Button>
        </p>
        <p>
          <Button modifiers={["lg"]} onClick={this.buttonHandleClick.bind(this)}>Large Button</Button>
          <Button modifiers={["primary", "lg"]} onClick={this.buttonHandleClick.bind(this)}>Large Primary Button</Button>
          <Button modifiers={["secondary", "lg"]} onClick={this.buttonHandleClick.bind(this)}>Large Secondary Button</Button>
        </p>
        <p>
          <Button href="/" onClick={this.buttonHandleClick.bind(this)}>Link Button</Button>
        </p>
      </>
    );
  }
}

export default Home;
