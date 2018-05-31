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
import Counter from './Pages/Counter';

// Load stylesheet from assets
import '../../assets/styles/sassquatch.scss';

render((
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Default><Home /></Default>}/>
      <Route exact path="/counter" render={() => <Default><Counter /></Default>}/>
    </Switch>
  </Router>
), document.getElementById('app'));
