import { createStore, combineReducers, applyMiddleware } from 'redux';
import { defaultState } from './defaultState'
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas'
import * as mutations from './mutations'
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
	combineReducers({

		players(players = defaultState.players, action) {
			switch (action.type) {
				case mutations.SET_PLAYER_CONNECTED:
					return players.map(player => {
						return (player.id === action.id) ? { ...player, isConnected: action.isConnected } : player;
					})
				case mutations.SET_PLAYER_WINS:
					return players.map(player => {
						return (player.id === action.id) ? { ...player, wins: action.wins } : player;
					})
				case mutations.SET_PLAYER_NAME:
					return players.map(player => {
						return (player.id === action.id) ? { ...player, name: action.name } : player;
					})
			}

			return players;
		},

		activeGame(activeGame = defaultState.activeGame, action) { return activeGame; },

		board(board = defaultState.board) { return board; }
	}),
	applyMiddleware(createLogger(), sagaMiddleware)
)

for (let saga in sagas) {
	sagaMiddleware.run(sagas[saga])
}
