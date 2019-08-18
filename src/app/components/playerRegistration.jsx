import React from 'react'
import * as mutations from '../store/mutations'
import { connect } from 'react-redux'
import { store } from '../store';

const playerRegistrationComponent = ({ registerPlayer }) => {
	return (
		<div>
			<h2> Welcome {store.getState().players[0].isConnected ? 'Player Two' : 'Player One'}! Please Enter your name! </h2>
			<form onSubmit={registerPlayer}>
				<input type="text" placeholder="player name" name="playerName" defaultValue="" />
				<button type="submit">Start</button>
			</form>
		</div>
	)
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
	registerPlayer(e) {
		e.preventDefault();
		let playerName = e.target['playerName'].value;
		dispatch(mutations.setPlayerName(playerName));
		dispatch(mutations.setPlayerConnected(true))
	}
})

export const ConnectedPlayerRegistration = connect(mapStateToProps, mapDispatchToProps)(playerRegistrationComponent);