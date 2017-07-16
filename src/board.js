function Board() {
  this.grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  this.playerMarker = 'X';
  this.
}

Board.prototype.chooseSquare = function(row, square) {
  this.grid[row][square] = this.playerMarker;
  this.changePlayer();
}

Board.prototype.changePlayer = function() {
  this.playerMarker = this.playerMarker === 'X' ? 'O' : 'X';
}

module.exports = Board;
