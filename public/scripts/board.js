define(function() {
  var Board = {};

  Board.winning = function() {
    console.log('cat');
  }

  Board.grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];

  Board.playerMarker = 'X';

  Board.chooseSquare = function(row, square) {
    this.grid[row][square] = this.playerMarker;
    // this.gridScanner.checkForWinner(this.grid);
    this.changePlayer();
  };

  Board.changePlayer = function() {
    this.playerMarker = this.playerMarker === 'X' ? 'O' : 'X';
  };

  Board.marker = function() {
    return this.playerMarker;
  }

  return Board;
})
