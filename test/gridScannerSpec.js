const expect = require('chai').expect;
var requirejs = require('requirejs')

requirejs.config({
    baseUrl: './public/scripts'
});

var GridScanner = requirejs('./public/scripts/gridScanner.js');

describe('GridScanner', function() {

  beforeEach(function() {
    // scanner = new GridScanner;
  })

  describe('Win detection', function() {
    it('registers no changes as not game-ending', function() {
      expect(GridScanner.checkForWinner([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ])).equal(false)
    })

    describe('Rows', function() {
      it("registers a full row of X's as a win", function() {
        expect(GridScanner.checkForWinner([
          ['X', 'X', 'X'],
          [0, 0, 0],
          [0, 0, 0]
        ])).equal(true)
      })

      it("registers the middle row of X's as a win", function() {
        expect(GridScanner.checkForWinner([
          [0, 0, 0],
          ['X', 'X', 'X'],
          [0, 0, 0]
        ])).equal(true)
      })

      it("registers the bottom row of X's as a win", function() {
        expect(GridScanner.checkForWinner([
          [0, 0, 0],
          [0, 0, 0],
          ['X', 'X', 'X']
        ])).equal(true)
      })

      it("registers a full row of O's as a win", function() {
        expect(GridScanner.checkForWinner([
          [0, 0, 0],
          ['O', 'O', 'O'],
          [0, 0, 0]
        ])).equal(true)
      })
    })
  })
})
