define(function() {
  var GridScanner = {};

  GridScanner.checkForWinner = function(grid) {
    var result = this._scanGrid(grid)
    return result;
  };

  GridScanner._scanGrid = function(grid) {
    return false;
  }

  return GridScanner;
})
