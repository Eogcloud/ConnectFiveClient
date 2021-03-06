export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';
export const SET_PLAYER_CONNECTED = 'SET_PLAYER_CONNECTED';
export const SET_PLAYER_WINS = 'SET_PLAYER_WINS';
export const SET_PLAYER_MOVE = 'SET_PLAYER_MOVE';
export const SET_BOARD = 'SET_BOARD';
export const GET_BOARD = 'GET_BOARD';


export const SetBoard = () => ({
	type: SET_BOARD
});

export const getBoard = () => ({
	type: GET_BOARD
})

export const setPlayerName = (playerName) => ({
	type: SET_PLAYER_NAME,
	playerName
});

export const setPlayerConnected = (isConnected) => ({
	type: SET_PLAYER_CONNECTED,
	isConnected
})

export const setPlayerWins = (wins) => ({
	type: SET_PLAYER_WINS,
	wins
})

export const setPlayerMove = (move) => ({
	type: SET_PLAYER_MOVE,
	move
})