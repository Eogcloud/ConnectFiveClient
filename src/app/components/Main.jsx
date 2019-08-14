import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { store } from '../store';
import { history } from '../store/history';
import { ConnectedDashboard } from './Dashboard';
import { ConnectedLogin } from './Login';
import { ConnectedNavigation } from './Navigation';
import { ConnectedTaskDetail } from './TaskDetail';
import { Redirect } from 'react-router';


const RouteGuard = Component => ({ match }) => {
	console.info("Route Guard Triggered for", match)
	if (store.getState().users[0].isConnected && store.getState().users[1].isConnected) {
		return <Component match={match} />
	} else {
		return <Redirect to='/' />
	}
}

export const Main = () => (
	<Router history={history}>
		<Provider store={store}>
			<div>
				<ConnectedNavigation />
				<Route exact path="/" component={ConnectedLogin} />
				<Route exact path="/dashboard" render={RouteGuard(ConnectedDashboard)} />
				<Route exact path="/task/:id" render={RouteGuard(ConnectedTaskDetail)} />
			</div>
		</Provider>
	</Router>
)