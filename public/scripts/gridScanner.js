define(function() {
  var GridScanner = {};

  GridScanner.checkForWinner = function(grid) {
    var result = this._scanGrid(grid);
    return result;
  };


  GridScanner._scanGrid = function(grid) {
    return this._scanRows(grid) || this._scanColumns(grid) || this._scanDiagonals(grid)
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


  GridScanner._scanDiagonals = function(grid) {
    var result = false
    var diagonalOne = grid[0][0] + grid[1][1] + grid[2][2];
    var diagonalTwo = grid[0][2] + grid[1][1] + grid[2][0];
    if (diagonalOne === 'XXX') {
      result = true;
    }
    
    return result;
  }

  return GridScanner;
})
