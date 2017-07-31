const expect = require('chai').expect;
var requirejs = require('requirejs')

requirejs.config({
    baseUrl: './public/scripts'
});

var Board = requirejs('./public/scripts/board.js')

describe('Board', function() {

  beforeEach(function() {
    Board.reset();
  })

  describe('Initialisation', function(){
    it('X is the first player by default', function() {
      expect(Board.playerMarker).equal('X');
    })

    it('starts with an empty grid', function() {
      expect(Board.grid).deep.equal([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]);
    })
  })


  describe('#chooseSquare', function() {
    it('can have a grid section selected', function() {
      Board.chooseSquare(0, 2)
      expect(Board.grid).deep.equal([
        [0, 0, 'X'],
        [0, 0, 0],
        [0, 0, 0]
      ]);
    })

    it('can have any grid section selected', function() {
      Board.chooseSquare(1, 1)
      expect(Board.grid).deep.equal([
        [0, 0, 0],
        [0, 'X', 0],
        [0, 0, 0]
      ]);
    })

    it('can have multiple grid sections selected', function() {
      Board.chooseSquare(1, 1)
      Board.chooseSquare(2, 0)
      expect(Board.grid).deep.equal([
        [0, 0, 0],
        [0, 'X', 0],
        ['O', 0, 0]
      ]);
    })

    it('triggers a player marker change', function() {
      Board.chooseSquare(0, 2)
      expect(Board.playerMarker).equal('O')
    })

    it('can trigger a player marker change twice', function() {
      Board.chooseSquare(0, 2)
      Board.chooseSquare(0, 1)
      expect(Board.playerMarker).equal('X')
    })
  })

  describe('#changePlayer', function() {
    it('changes the current player Marker', function() {
      Board.changePlayer()
      expect(Board.playerMarker).equal('O');
    })

    it('changes the current player Marker', function() {
      Board.changePlayer()
      Board.changePlayer()
      expect(Board.playerMarker).equal('X');
    })
  })
})
