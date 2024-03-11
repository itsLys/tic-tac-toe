// Game of TicTacToe
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
const gameBoard = (function () {
  let board = [];

  for (let i = 0; i < 3; i++) {
    board.push([]);
    for (let j = 0; j < 3; j++) {
      board[i].push(null);
    }
  }
  let currentPlayer = players.getPlayers().player1;
  const crossCell = (row, col) => {
    if (
      row > board.length - 1 ||
      col > board.length - 1 ||
      row < 0 ||
      col < 0 ||
      board[row][col] != null
    ) {
      return "Wrong input, Try again please";
    } else {
      board[row][col] = currentPlayer.marker;
      checkWinner(currentPlayer);
      if (currentPlayer == players.getPlayers().player1) {
        currentPlayer = players.getPlayers().player2;
      } else {
        currentPlayer = players.getPlayers().player1;
      }
    }
  };

  const reset = () => {
    board = [];
    for (let i = 0; i < 3; i++) {
      board.push([]);
      for (let j = 0; j < 3; j++) {
        board[i].push(null);
      }
    }
  };

  const getBoard = () => board;
  return { getBoard, crossCell, reset };
})();

const gameFlow = (function () {
  const playRound = (row, col) => {
    gameBoard.crossCell(row, col);
  };
  const gameReset = () => gameBoard.reset();

  return { playRound, gameReset };
  // whenever called executes crossCell
})();
gameFlow.playRound(0, 0); // X turn
gameFlow.playRound(0, 0); // O turn
gameFlow.playRound(1, 1); // Still O

function checkWinner(player) {
  let board = gameBoard.getBoard();

  const rowWin = board.find(
    (item) =>
      JSON.stringify(item) ==
      JSON.stringify([player.marker, player.marker, player.marker])
  );
  const colWin = board.every(hasMarker);
  function hasMarker(item) {
    return (
      item[0] == player.marker ||
      item[1] == player.marker ||
      item[2] == player.marker
    );
  }
  const diagWin = () => {
    return (
      (board[0][0] == player.marker &&
        board[1][1] == player.marker &&
        board[2][2] == player.marker) ||
      (board[0][2] == player.marker &&
        board[1][1] == player.marker &&
        board[2][0] == player.marker)
    );
  };
  if (rowWin || colWin || diagWin()) {
    console.log(`Game over ${player.name} Wins`);
    gameBoard.reset();
  }
}
// ['X', 'O', null]
// ['X', null, null]
// ['X', null, null]
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
