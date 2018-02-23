import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Account from './components/Account'
import Redeem from './components/Redeem'
import {BaseLayout} from './components/BaseLayout'

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
  <Switch>
    <Route path = '/redeem' component = { Redeem } />
    <Route path = '/account' component = { Account } />
    <Route path = '/' component = { Home } />
  </Switch>
  </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
