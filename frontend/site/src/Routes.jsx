import React from 'react';
import {
	Route,
	Switch
} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Login from './pages/Login/Login';
import Index from './pages/Index';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login} />
			<Route path='/index' component={Index} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
