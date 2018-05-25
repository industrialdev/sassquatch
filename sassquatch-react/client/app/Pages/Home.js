import React, { Component } from 'react';

import Button from '../Components/Button';
import Icon from '../Components/Icon';
import Alert from '../Components/Alert';
import Dropdown from '../Components/Dropdown';

class Home extends Component {
  buttonHandleClick(event) {
    event.preventDefault();
    alert('Example of a click event passed to a button');
  }
  render() {
    return (
      <>
        <h2>Buttons</h2>
        <h3 class="no-margin--top">Sizes</h3>
        <p>
          <Button btnSize="large">Large Button</Button>
          <Button>Default Button</Button>
          <Button btnSize="small">Small Button</Button>
        </p>
        <h3 class="no-margin--top">Actions</h3>
        <p>
          <Button path="/counter">Internally Linked button</Button>
          <Button link="https://industrialagency.ca">Externally Linked button</Button>
          <Button onClick={this.buttonHandleClick.bind(this)}>Default Button with Click Event</Button>
        </p>
        <h3 class="no-margin--top">Styles</h3>
        <p>
          <Button btnStyle="primary">Primary Button</Button>
          <Button btnStyle="secondary">Secondary Button</Button>
          <Button disabled>Disabled Button</Button>
        </p>
        <h3 class="no-margin--top">With Icons</h3>
        <p>
          <Button iconBefore="info-circle">Button with icon before</Button>
          <Button iconAfter="info-circle" iconStyle="solid">Button with icon after</Button>
          <Button iconBefore="info-circle" iconAfter="info-circle" Style="light">Button with icon before and after</Button>
        </p>
        <h2>Icons</h2>
        <p>
          <Icon iconName="info-circle" /> This icon is hidden from screen readers<br/>
          <Icon iconName="info-circle" label="this is a test" /> This icon has a label which is read by screen readers
        </p>
        <h2>Alerts</h2>
        <Alert iconName="info-circle" iconStyle="solid">This is a default alert</Alert>
        <Alert iconName="exclamation-triangle" iconStyle="solid" alertStyle="warning">This is a warning alert</Alert>
        <Alert iconName="exclamation-circle" iconStyle="solid" alertStyle="danger">This is a danger alert</Alert>
        <Alert iconName="check-circle" iconStyle="solid" alertStyle="success">This is a success alert</Alert>
        <h2>Dropdowns</h2>
        <Dropdown>This is a test</Dropdown>
      </>
    );
  }
}

export default Home;
