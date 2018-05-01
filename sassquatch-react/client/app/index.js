import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Default from './Layouts/Default';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import Login from './Pages/Login';

// Load stylesheet from theme folder
import '../../../sassquatch-theme/src/assets/styles/sassquatch.scss';

render((
  <Router>
    <Default>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route component={NotFound}/>
      </Switch>
    </Default>
  </Router>
), document.getElementById('app'));
