function Board(GridScanner) {
  this.grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  this.playerMarker = 'X';
  this.gridScanner = new GridScanner();
}

Board.prototype.chooseSquare = function(row, square) {
  this.grid[row][square] = this.playerMarker;
  this.changePlayer();
}

Board.prototype.changePlayer = function() {
  this.playerMarker = this.playerMarker === 'X' ? 'O' : 'X';
}

Board.prototype.marker = function() {
  return this.playerMarker;
}

if (typeof module !== 'undefined') {
  module.exports = Board;
}
