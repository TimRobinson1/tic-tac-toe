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

      it('does not register incomplete rows as wins', function() {
        expect(GridScanner.checkForWinner([
          ['O', 'X', 0],
          ['O', 'O', 0],
          [0, 'X', 'X']
        ])).equal(false)
      })

      it('does not register mixed rows as wins', function() {
        expect(GridScanner.checkForWinner([
          ['O', 'X', 'X'],
          ['X', 'O', 'X'],
          ['O', 'X', 'O']
        ])).equal(false)
      })
    })

    describe('Columns', function() {
      it("registers a full column of X's as a win", function() {
        expect(GridScanner.checkForWinner([
          ['X', 0, 0],
          ['X', 0, 0],
          ['X', 0, 0]
        ])).equal(true)
      })

      it("registers a full column of O's as a win", function() {
        expect(GridScanner.checkForWinner([
          [0, 'O', 0],
          [0, 'O', 0],
          [0, 'O', 0]
        ])).equal(true)
      })

      it("registers a full third column as a win", function() {
        expect(GridScanner.checkForWinner([
          [0, 0, 'X'],
          [0, 0, 'X'],
          [0, 0, 'X']
        ])).equal(true)
      })

      it("does not register a mixed column as a win", function() {
        expect(GridScanner.checkForWinner([
          [0, 0, 'X'],
          [0, 0, 'O'],
          [0, 0, 'X']
        ])).equal(false)
      })

      it("does not register incomplete columns as a win", function() {
        expect(GridScanner.checkForWinner([
          ['O', 'X', 'X'],
          ['O', 'O', 0],
          [0, 0, 'X']
        ])).equal(false)
      })
    })

    describe('Diagonals', function() {
      it("registers diagonal line of X's as a win", function() {
        expect(GridScanner.checkForWinner([
          ['X', 0, 0],
          [0, 'X', 0],
          [0, 0, 'X']
        ])).equal(true)
      })
    })
  })
})
