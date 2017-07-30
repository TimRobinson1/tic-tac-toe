define(function() {
  function Board() {
    this.grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    this.playerMarker = 'X';
    // this.gridScanner = new GridScanner();
  }

  Board.prototype = {
    constructor: Board,
    chooseSquare: function(row, square) {
      this.grid[row][square] = this.playerMarker;
      // this.gridScanner.checkForWinner(this.grid);
      // this.changePlayer();
    }
  }

  // Board.prototype.changePlayer = function() {
  //   this.playerMarker = this.playerMarker === 'X' ? 'O' : 'X';
  // }
  //
  // Board.prototype.marker = function() {
  //   return this.playerMarker;
  // }
  //
  // cons


  return Board;
})
