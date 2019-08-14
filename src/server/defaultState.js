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
		tiles: new Array[6 * 9]
	},
}