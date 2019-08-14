import React from 'react'
import * as mutations from '../store/mutations'
import { connect } from 'react-redux'

const LoginComponent = ({ authenticateUser }) => {
	return (
		<div>
			<h2>
				Please Enter your name and choose your color to play!
		</h2>
			<form onSubmit={registerPlayer}>
				<input type="text" placeholder="player name" name="playername" defaultValue="" />
				<select id="color" />
					<value id="red">red</value>
					<value id="yellow">yellow</value>
				<button type="submit">start</button>
			</form>
		</div>
	)
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
	registerPlayer(e) {
		e.preventDefault();
		let username = e.targt['playername'].value;
		let color = e.targt['color'].value;
		dispatch(mutations.);
	}
})

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);