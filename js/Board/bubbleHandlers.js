Board.prototype.addBubble = function () {
//function createBubble(e){
  //var args = {
    //location: {
      //left: e.pageX,
      //top: e.pageY
    //}
  //}

  //switch(args.inputType){
    //case "image":
      //args.sourceUrl = e.sourceUrl;
      //break;
  //}

  //var bubble = new Bubble(args);
  //renderBubble(bubble);
  //board.addBubble(bubble);
//}

}

Board.prototype.removeBubble = function () {
}

Board.prototype.updateBubble = function (e, ui) {
  for (var i = 0; i < this.bubbles.length; i++) {
    if (e.target.id === this.bubbles[i].bubbleId) {
      if (ui.position) {
        // TODO: bubble position might be a bit off?
        this.bubbles[i].location.top = ui.position.top;
        this.bubbles[i].location.left = ui.position.left;
      }

      // Draggable event
      if (ui.size) {
        this.bubbles[i].size.width = ui.size.width;
        this.bubbles[i].size.height = ui.size.height;
      }

      board.save();
    }
  }
}

Board.prototype.updateContent = function (bubble) {
  console.log(bubble);
  for (var i = 0; i < this.bubbles.length; i++) {
    if (bubble[0].id === this.bubbles[i].bubbleId) {
      this.bubbles[i].content = bubble.context.innerHTML;
      board.save();
      return;
    }
  }
}

//Board.prototype.getBubble = function (id) {
  //for (var i = 0; i < this.bubbles.length; i++) {
    //if (id === this.bubbles[i].bubbleId) {
      //return this.bubbles[i];
    //}
  //}
//}

