import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Default from './Layouts/Default';
import HeadLess from './Layouts/HeadLess';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import Login from './Pages/Login';

// Load stylesheet from theme folder
import '../../../sassquatch-theme/src/assets/styles/sassquatch.scss';

render((
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Default><Home /></Default>}/>
      <Route path="/login" render={() => <HeadLess><Login /></HeadLess>}/>
    </Switch>
  </Router>
), document.getElementById('app'));
