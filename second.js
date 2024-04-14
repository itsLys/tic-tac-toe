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
			console.table(getBoard());
			return true;
		}
	};

	return { getBoard, crossCell };
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
				alternateCurrentPlayer();
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
		// a row win is if one array inside the grid has the same items
		// so for each item in the grid, if the items inside of of the item are all the same, it is a row win
		GameBoard.getBoard().forEach((array) => {
			if (array.every((cell) => cell == "O")) console.log("O wins");
			else if (array.every((cell) => cell == "X")) console.log("X wins");
		});
	};

	return { playRound, getCurrentPlayer, checkWin };
})();
gameFlow.playRound(3, 1);
gameFlow.playRound(1, 1);
gameFlow.playRound(3, 2);
gameFlow.playRound(1, 2);
gameFlow.playRound(3, 3);
gameFlow.playRound(1, 3);
