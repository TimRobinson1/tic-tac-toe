var board = new Board();

document.querySelectorAll('td').forEach( (element) => {
  element.onclick = () => {
    if (element.innerHTML === '') {
      element.innerHTML = board.marker();
      board.changePlayer();
    }
  }
})
