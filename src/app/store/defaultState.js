export const defaultState = {
	activeGame: false,
	players: [{
		id: "playerOne",
		name: "",
		wins: 0,
		isConnected: false
	}, {
		id: "playerTwo",
		name: "",
		wins: 0,
		isConnected: false
	}],

	board: {
		tiles: Array(9 * 6).fill('EMPTY')
	},
}