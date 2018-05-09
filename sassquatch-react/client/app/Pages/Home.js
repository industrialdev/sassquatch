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
          <Button size="small" onClick={this.buttonHandleClick.bind(this)}>Small Button</Button>
          <Button type="primary" size="small" onClick={this.buttonHandleClick.bind(this)}>Small Primary Button</Button>
          <Button type="secondary" size="small" onClick={this.buttonHandleClick.bind(this)}>Button</Button>
        </p>
        <p>
          <Button onClick={this.buttonHandleClick.bind(this)}>Default Button</Button>
          <Button type="primary" onClick={this.buttonHandleClick.bind(this)}>Default Primary Button</Button>
          <Button type="secondary" onClick={this.buttonHandleClick.bind(this)}>Default Secondary Button</Button>
        </p>
        <p>
          <Button size="large" onClick={this.buttonHandleClick.bind(this)}>Large Button</Button>
          <Button type="primary" size="large" onClick={this.buttonHandleClick.bind(this)}>Large Primary Button</Button>
          <Button type="secondary" size="large" onClick={this.buttonHandleClick.bind(this)}>Large Secondary Button</Button>
        </p>
        <p>
          <Button link="/">Button with link</Button>
          <Button iconBefore="far fa-info-circle">Button with icon before</Button>
          <Button iconAfter="far fa-info-circle">Button with icon after</Button>
          <Button iconBefore="far fa-info-circle" iconAfter="far fa-info-circle">Button with icon before and after</Button>
        </p>
      </>
    );
  }
}

export default Home;
