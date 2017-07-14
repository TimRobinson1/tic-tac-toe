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
  })
})
