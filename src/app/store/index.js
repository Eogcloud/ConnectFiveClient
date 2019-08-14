import { createStore, combineReducers, applyMiddleware } from 'redux';
import { defaultState } from '../../server/defaultState'
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
				case mutations.SET_PLAYER_MOVE: return players;
			}
		},

		activeGame(activeGame = defaultState.activeGame, action) { return false; },

		board(board = defaultState.board) { return false; }
	}),
	applyMiddleware(createLogger(), sagaMiddleware)
)

for (let saga in sagas) {
	sagaMiddleware.run(sagas[saga])
}
