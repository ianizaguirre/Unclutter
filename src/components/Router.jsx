import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import App from '../containers/App';
import DragDropZone from '../containers/DragDropZone';
import FourOhFour from './FourOhFour';

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/app/:sessionId" component={App} />
        <Route path="/zone" component={DragDropZone} />

        <Route component={FourOhFour} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Router;
