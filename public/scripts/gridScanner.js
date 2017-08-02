define(function() {
  var GridScanner = {};

  GridScanner.checkForWinner = function(grid) {
    var result = this._scanGrid(grid)
    return result;
  };

  GridScanner._scanGrid = function(grid) {
    return this._findRow(grid);
  }

  GridScanner._findRow = function(grid) {
    var result = false;
    grid.forEach( function(row) {
      if (row.join('') === 'XXX' || row.join('') === 'OOO') {
        result = true;
      }
    })
    return result;
  }

  return GridScanner;
})
