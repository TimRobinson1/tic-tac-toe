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

    it('starts with an empty grid', function() {
      expect(board.grid).deep.equal([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]);
    })

    it('can have a grid section selected', function() {
      board.chooseSquare(0, 2)
      expect(board.grid).deep.equal([
        [0, 0, 1],
        [0, 0, 0],
        [0, 0, 0]
      ]);
    })
  })
})
