requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/scripts',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    // paths: {
    //     app: '../app'
    // }
});

// Start the main app logic.
require(['board'], function(Board) {
  var board = new Board();
  board.chooseSquare(0, 0);
  console.log(board)

  var title = document.getElementById('tictactoe');
  title.addEventListener('click', function() {
    alert('asdsa')
  })
})
