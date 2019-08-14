import React from 'react';
import { Provider } from 'react-redux';
import { Redirect } from 'react-router';
import { Router, Route } from 'react-router-dom';
import { store } from '../store';
import { history } from '../store/history';
import { ConnectedPlayerRegistration } from './playerRegistration';


const RouteGuard = Component => ({ component }) => {
	console.info("Route Guard Triggered for", match)
	if (store.getState().users[0].isConnected && store.getState().users[1].isConnected) {
		return <Component match={component} />
	} else {
		return <Redirect to='/' />
	}
}

export const Main = () => (
	<Router history={history}>
		<Provider store={store}>
			<div>
				<ConnectedNavigation />
				<Route exact path="/" component={ConnectedPlayerRegistration} />
				<Route exact path="/game" render={RouteGuard()} />
			</div>
		</Provider>
	</Router>
)