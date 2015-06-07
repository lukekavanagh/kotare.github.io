var connectionInProgress = false;
var currentConnection = {
  startBubbleId: "",
  endBubbleId: ""
};
var board;

$(document).ready(function() {
  this.mySVG = $('body').connect();

  //oauth2 junk here...  

  board = ApiFacade.postBoard();
  console.log("Board: ", board);
  //get/post a board (board = ?)
  console.log("With id: ",  ApiFacade.getBoard(board._id));

  $("#board").on("click", createBubble);

  $('#board').on("click", '.bubble', function(e) {
    e.stopImmediatePropagation();
  });

  // Persist to db
  $('#board').on('mouseup', function () {
    var putResponse = ApiFacade.putBoard(board);
  });
});

function createBubble(e){
  var randId = helper.guid();
  var bubble = new Bubble(e.pageY, e.pageX, randId);
  renderBubble(bubble);
  board.bubbles.push(bubble);
}




