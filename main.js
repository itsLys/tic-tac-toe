// Game of TicTacToe

const gameBoard = (function () {
  const board = [];

  for (let i = 0; i < 9; i++) {
    board.push(null);
  }

  const crossCell = (marker, input) => {
    if (input > board.length - 1 || input < 0 || board[input] != null) {
      return "Wrong input, Try again please";
    }
    board[input] = marker;
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

  const playRound = (input) => {
    gameBoard.crossCell(currentPlayer.marker, input);
    if (currentPlayer == players.getPlayers().player1) {
      currentPlayer = players.getPlayers().player2;
    } else {
      currentPlayer = players.getPlayers().player1;
    }
    checkWinner();
  };
  const gameReset = () => gameBoard.reset();

  return { playRound, gameReset };
  // whenever called executes crossCell
})();
gameFlow.playRound(0);

function checkWinner() {
  let board = gameBoard.getBoard();
  for (let i = 0; i < board.length; i++) {
    // let;
  }
}

// Game end logic
// Each round check if a player marker meets a winning patterns, or if the board is full
// each round call a function that returns WIN, LOSS, TIE,
// the Function checks if : for each board index, if
//    board[i] is [0,1,2] or
//  [3,4,5] etc
//  [6,7,8]
//  [0,3,6]
//  [1,4,7]
//  [2,5,8]
//  [0,4,8]
//  [2,4,6],
// announce winner, reset the board
//  If board is full, announce a tie, reset

// for (let i = 0; i < 9; i++) {
//   round(i);
// }
// round(0);
// game Flow
// First round, player1 will always cross a cell,
//    Will call the crossCell function will pass it his marker and input

// Player 2 will cross a cell, the code will make sure that the current player is the correct one, create a variable that saves the previous player,
// and calls the crossCell function with the correct params

// Player one must cross a cell
//    Player one must modify one index of the array gameBoard
// Create a function inside the gameBoard that takes the playerName and the Marker, and Input, and changes that index to the right one

// Pre game:
// Starts With a blank 3x3 grid
//    The Grid is an Array that has 9 indexes 0-8
// All 9 cells are empty:
//    They have a value of 0;
// There are 2 players Player X and Player O
//    each player is an object with the marker X or O

// Game:
// Player 1 must cross one cell with X
//    Update the Board Array, Replace the chosen index 0-8 with the player1.mark X;
// Player 2 must cross an empty cell with O
//    Update the Board Array If empty, replace the chosen cell with player2.mark O;
// Player 1 must cross and empty cell
//   Update the Board Array If empty, replace the chosen cell with player1.mark X;
// A crossed cell cannot be re-crossed again by neither player
// Each round check if 1 marker is occupying the one of the following array indices:
//  [0,1,2]
//  [3,4,5]
//  [6,7,8]
//  [0,3,6]
//  [1,4,7]
//  [2,5,8]
//  [0,4,8]
//  [2,4,6]
// Or if the board is fully crossed, then end the game.
// Post-game:
// If X is occupying one of the winning patterns, Print Player 1 Won
// If O is Occupying one of the winning patterns, Print player 2 Won
// If the board if full(needs to check false for meeting pattern), print Tie.
