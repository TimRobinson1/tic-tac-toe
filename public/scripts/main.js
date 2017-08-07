requirejs.config({
    baseUrl: './scripts'
});

// Start the main app logic.
require(['board', 'gridScanner'], function(Board) {
  document.querySelectorAll('td').forEach( (element) => {
    element.onclick = () => {
      if (element.innerHTML === '' && !Board.isEnded) {
        var coords = element.id.split('-');
        element.innerHTML = Board.marker();
        Board.chooseSquare(coords[0], coords[1]);
      }
      if (Board.isEnded) {
        document.getElementById('game-message').innerHTML = 'Game over!';
      }
    }
  })
})
