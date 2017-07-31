requirejs.config({
    baseUrl: './scripts'
});

// Start the main app logic.
require(['board', 'gridScanner'], function(Board) {
  document.querySelectorAll('td').forEach( (element) => {
    element.onclick = () => {
      if (element.innerHTML === '') {
        element.innerHTML = Board.marker();
        Board.changePlayer();
      }
    }
  })
})
