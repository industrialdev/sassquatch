import React, { Component } from 'react';

import Button from '../Components/Button';
import Icon from '../Components/Icon';

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
          <Button path="/counter">Internally Linked button</Button>
          <Button link="https://industrialagency.ca">Externally Linked button</Button>
          <Button btnStyle="primary" onClick={this.buttonHandleClick.bind(this)}>Primary Button</Button>
          <Button btnStyle="secondary" onClick={this.buttonHandleClick.bind(this)}>Secondary Button</Button>
          <Button iconBefore="info-circle">Button with icon before</Button>
          <Button iconAfter="info-circle" iconStyle="solid">Button with icon after</Button>
          <Button iconBefore="info-circle" iconAfter="info-circle" Style="light" disabled>Button with icon before and after</Button>
        </p>
        <p>
          <Icon iconName="info-circle" /> This icon is hidden from screen readers<br/>
          <Icon iconName="info-circle" label="this is a test" /> This icon has a label which is read by screen readers
        </p>
      </>
    );
  }
}

export default Home;
