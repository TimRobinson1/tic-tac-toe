function Board() {
  this.gridSize = 9;
  this.grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
}

Board.prototype.chooseSquare = function(row, square) {
  this.grid[row][square] = 1;
}

module.exports = Board;
