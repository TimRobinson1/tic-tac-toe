define(['gridScanner'], function(gridScanner) {
  var Board = {};

  Board.winning = function() {

  }

  Board.grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];

  Board.isEnded = false;
  Board.gridScanner = gridScanner;
  Board.playerMarker = 'X';

  Board.chooseSquare = function(row, column) {
    this.grid[row][column] = this.playerMarker;
    this.isEnded = this.gridScanner.checkForWinner(this.grid);
    this.changePlayer();
  };

  Board.changePlayer = function() {
    this.playerMarker = this.playerMarker === 'X' ? 'O' : 'X';
  };

  Board.marker = function() {
    return this.playerMarker;
  }

  Board.reset = function() {
    this.playerMarker = 'X';
    this.grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];
  }

  return Board;
})
