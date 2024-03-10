// Game of TicTacToe

const gameBoard = (function () {
  const board = [];

  for (let i = 0; i < 3; i++) {
    board.push([]);
    for (let j = 0; j < 3; j++) {
      board[i].push(null);
    }
  }

  const crossCell = (marker, row, col) => {
    if (
      row > board.length - 1 ||
      col > board.length - 1 ||
      row < 0 ||
      col < 0 ||
      board[row][col] != null
    ) {
      return "Wrong input, Try again please";
    }
    board[row][col] = marker;
  };

  const reset = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = null;
    }
    // return board;
  };

  const getBoard = () => board;
  return { getBoard, crossCell, reset };
})();

const players = (function () {
  const player1 = {
    name: "Steve",
    marker: "X",
  };
  const player2 = {
    name: "Grieg",
    marker: "O",
  };

  const playerObj = {
    player1,
    player2,
  };
  const getPlayers = () => playerObj;
  return { getPlayers };
})();

const gameFlow = (function () {
  let currentPlayer = players.getPlayers().player1;

  const playRound = (row, col) => {
    gameBoard.crossCell(currentPlayer.marker, row, col);
    checkWinner(currentPlayer);
    if (currentPlayer == players.getPlayers().player1) {
      currentPlayer = players.getPlayers().player2;
    } else {
      currentPlayer = players.getPlayers().player1;
    }
  };
  const gameReset = () => gameBoard.reset();

  return { playRound, gameReset };
  // whenever called executes crossCell
})();
gameFlow.playRound(0, 0);
gameFlow.playRound(0, 1);
gameFlow.playRound(1, 0);
gameFlow.playRound(0, 4);
gameFlow.playRound(2, 0);

function checkWinner(player) {
  let board = gameBoard.getBoard();

  const rowWin = board.find(
    (item) =>
      JSON.stringify(item) ==
      JSON.stringify([player.marker, player.marker, player.marker])
  );

  console.log(colWin);
  if (rowWin) {
    console.log(`Game over ${player.name} Wins`);
  }
}

//  For each index value in the winCon, if one is equal to
//  If the index of board[i] is X
// and for each Boarder[i] if I is equal to one of Wincon[i]
//  [0,1,2]
//  [3,4,5]
//  [6,7,8]
//  [0,3,6]
//  [1,4,7]
//  [2,5,8]
//  [0,4,8]
//  [2,4,6],
