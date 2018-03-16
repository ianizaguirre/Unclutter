import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import FourOhFour from './FourOhFour';

const Router = () => (
	<BrowserRouter>
		<div className="app">
			<Switch>
				<Route exact path="/" component={Landing} />

				<Route component={FourOhFour} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default Router;
