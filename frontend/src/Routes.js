import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import {NotFoundPage, HomePage, EventListPage} from './common';

export default (
  <Route path='/' Component={App}>
    <IndexRoute Component={HomePage} />
    <Route path="EventList" component={EventListPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
)