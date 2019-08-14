import React from 'react'
import * as mutations from '../store/mutations'
import { connect } from 'react-redux'
import { store } from '../store';


const playerRegistrationComponent = ({ }) => {
	return (
		<div>
			<h2> Welcome {store.getState().players[0].isConnected ? 'Player One' : 'Player Two'}! Please Enter your name and </h2>
			<form onSubmit={registerPlayer}>
				<input type="text" placeholder="player name" name="playername" defaultValue="" />
				<button type="submit">start</button>
			</form>
		</div>
	)
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
	registerPlayer(e) {
		e.preventDefault();
		let playername = e.targt['playername'].value;
		dispatch(mutations.SET_PLAYER_NAME(playername));
	}
})

export const ConnectedPlayerRegistration = connect(mapStateToProps, mapDispatchToProps)(playerRegistrationComponent);