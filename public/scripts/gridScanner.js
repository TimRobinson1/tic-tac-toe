define(function() {
  var GridScanner = {};

  GridScanner.checkForWinner = function(grid) {
    var result = this._scanGrid(grid);
    return result;
  };

  GridScanner._scanGrid = function(grid) {
    return this._scanRows(grid) || this._scanColumns(grid)
  }

  GridScanner._scanRows = function(grid) {
    var result = false;
    grid.forEach( function(row) {
      if (row.join('') === 'XXX' || row.join('') === 'OOO') {
        result = true;
      }
    })
    return result;
  }

  GridScanner._scanColumns = function(grid) {
    var transposedGrid = grid[0].map(function(_col, index) {
      return grid.map(function(row) {
        return row[index]
      })
    });

    return this._scanRows(transposedGrid)
  }

  return GridScanner;
})
