const GameBoard = (function () {
	const grid = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];
	// const grid = [
	// 	["X", "X", "O"],
	// 	["X", "X", "O"],
	// 	["O", "O", "O"],
	// ];

	const getBoard = () => grid;

	const crossCell = (x, y, marker) => {
		// checks for valid coordinates
		marker = marker.toUpperCase();
		if (!marker || (marker != "X" && marker != "O")) {
			console.log("failed");
			return false;
		} else if (grid[x - 1][y - 1]) {
			console.log("failed");
			return false;
		} else {
			grid[x - 1][y - 1] = marker;
			// console.table(getBoard());
			return true;
		}
	};
	const resetBoard = () => {
		grid.forEach((array, i) =>
			grid[i].forEach((item, j) => (grid[i][j] = null))
		);
	};

	return { getBoard, crossCell, resetBoard };
})();

const Players = (function () {
	const player1 = {
		name: "Steve",
		marker: "X",
	};
	const player2 = {
		name: "Grieg",
		marker: "O",
	};
	const getPlayersNameAndMarker = () => {
		return { player1, player2 };
	};
	return { getPlayersNameAndMarker };
})();

const gameFlow = (function () {
	let player1 = Players.getPlayersNameAndMarker().player1;
	let player2 = Players.getPlayersNameAndMarker().player2;

	let currentPlayer = player1;

	const playRound = (x, y) => {
		if (x < 1 || x > 3 || y < 1 || y > 3 || !x || !y || isNaN(x) || isNaN(y)) {
			return "please enter valid parameters";
		} else {
			if (GameBoard.crossCell(x, y, currentPlayer.marker)) {
				checkWin();
			}
		}
	};
	const alternateCurrentPlayer = () => {
		currentPlayer == player1
			? (currentPlayer = player2)
			: (currentPlayer = player1);
	};
	const getCurrentPlayer = () => currentPlayer;

	const checkWin = () => {
		GameBoard.getBoard().forEach((array) => {
			if (array.every((cell) => cell == currentPlayer.marker)) {
				console.log(`${currentPlayer.name} ${currentPlayer.marker} Won`);
				restartGame();
			} else alternateCurrentPlayer();
		});
	};
	const restartGame = () => {
		GameBoard.resetBoard();
		currentPlayer = player1;
	};
	return { playRound, getCurrentPlayer, checkWin };
})();
gameFlow.playRound(3, 1);
gameFlow.playRound(1, 1);
gameFlow.playRound(3, 2);
gameFlow.playRound(1, 2);
gameFlow.playRound(3, 3);
gameFlow.playRound(1, 3);
