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

  describe('Initialisation', function() {
    it('registers no changes as not game-ending', function() {
      expect(GridScanner.checkForWinner([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ])).equal(false)
    })
  })
})
