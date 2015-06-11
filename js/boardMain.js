var mySVG;
board = new Board();

$(document).ready(function() {
  facebookSdk(secureMain, true);
});

function secureMain() {
  sphere();
  nav();
  mySVG = $('body').connect();

  board.load(); 
}

