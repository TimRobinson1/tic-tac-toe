const expect = require('chai').expect;
var Board = require('../src/board.js');

describe('Board', function() {
  var board;

  beforeEach(function() {
    board = new Board();
  })

  describe('Initialisation', function(){
    it('starts with correct grid size', function() {
      expect(board.gridSize).equal(9);
    })

    it('X is the first player by default', function() {
      expect(board.playerMarker).equal('X');
    })

    it('starts with an empty grid', function() {
      expect(board.grid).deep.equal([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]);
    })
  })

  describe('#chooseSquare', function() {
    it('can have a grid section selected', function() {
      board.chooseSquare(0, 2)
      expect(board.grid).deep.equal([
        [0, 0, 1],
        [0, 0, 0],
        [0, 0, 0]
      ]);
    })

    it('can have any grid section selected', function() {
      board.chooseSquare(1, 1)
      expect(board.grid).deep.equal([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ]);
    })

    it('can have multiple grid sections selected', function() {
      board.chooseSquare(1, 1)
      board.chooseSquare(2, 0)
      expect(board.grid).deep.equal([
        [0, 0, 0],
        [0, 1, 0],
        [1, 0, 0]
      ]);
    })
  })

  describe('#changePlayer', function() {
    it('changes the current player Marker', function() {
      board.changePlayer()
      expect(board.playerMarker).equal('O');
    })

    it('changes the current player Marker', function() {
      board.changePlayer()
      board.changePlayer()
      expect(board.playerMarker).equal('X');
    })
  })
})
