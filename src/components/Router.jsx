import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import App from '../views/App';
import FourOhFour from './FourOhFour';

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/app" component={App} />

        <Route component={FourOhFour} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Router;
