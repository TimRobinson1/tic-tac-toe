const expect = require('chai').expect;
var requirejs = require('requirejs')

requirejs.config({
    baseUrl: './public/scripts'
});


describe('Board', function() {
  var Board = requirejs('./public/scripts/board.js')

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
