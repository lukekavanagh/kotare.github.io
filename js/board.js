var connectionInProgress = false;
var currentConnection = {
  startBubbleId: "",
  endBubbleId: ""
};
var board;

$(document).ready(function() {
  this.mySVG = $('body').connect();

  //oauth2 junk here...  

  // New board
  board = ApiFacade.postBoard();

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
  console.log("Bubbles: ", board.bubbles);
}




