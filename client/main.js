import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, BrowserRouter } from 'react-router-dom';
import tether from 'tether';
global.Tether = tether;
bootstrap = require('bootstrap');

import App from './components/app';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

import { Posts } from '../imports/collections/posts';
import { Comments } from '../imports/collections/comments';

const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={App} />
    </div>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes , document.querySelector('.render-target'));
});
