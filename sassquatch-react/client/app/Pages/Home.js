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
          <Button size="large" onClick={this.buttonHandleClick.bind(this)}>Large Button</Button>
          <Button onClick={this.buttonHandleClick.bind(this)}>Default Button</Button>
          <Button size="small" onClick={this.buttonHandleClick.bind(this)}>Small Button</Button>
        </p>
        <p>
          <Button path="/counter">Internally Linked button</Button>
          <Button link="https://industrialagency.ca">Externally Linked button</Button>
          <Button type="primary" onClick={this.buttonHandleClick.bind(this)}>Primary Button</Button>
          <Button type="secondary" onClick={this.buttonHandleClick.bind(this)}>Secondary Button</Button>
          <Button iconBefore="far fa-info-circle">Button with icon before</Button>
          <Button iconAfter="far fa-info-circle">Button with icon after</Button>
          <Button iconBefore="far fa-info-circle" iconAfter="far fa-info-circle">Button with icon before and after</Button>
        </p>
      </>
    );
  }
}

export default Home;
