import React from 'react'
import * as mutations from '../store/mutations'
import { connect } from 'react-redux'
import { store } from '../store';

const waitingComponent = ({ registerPlayer }) => {
	return (
		<div>
			<h2> {store.getState().players[0].name}, we're waiting for Player 2...</h2>
		</div>
	)
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
})

export const ConnectedWaiting = connect(mapStateToProps, mapDispatchToProps)(waitingComponent);