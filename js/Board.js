function Board() {
  this.from;
  this.last;
}

Board.prototype.save = function () {
  ApiFacade.putBoard(this, function (payload) {
    // TODO: use response here in some fashion? Error handling?
    console.log("Payload returning from save(): ", payload);
  });
}

Board.prototype.load = function () {
  ApiFacade.retrieveBoard(this.loadCallback.bind(this));
  //function (payload) {
    //if (payload) {
      //console.log("Payload returning from load(): ", payload);

      //this.fbId = payload.fbId;
      //this.bubbles = payload.bubbles;
      //this.connections = payload.connections;

      //console.log(this);
      //this.render();
      //eventHandlers();
    //} else {
      //// TODO: handle error. Retry?
      //console.log("Empty payload in board.load()");
    //}
 //});
}

Board.prototype.loadCallback = function (payload) {
  if (payload) {
    console.log("Payload returning from load(): ", payload);

    $.extend(this, payload);
    //this.fbId = payload.fbId;
    //this.bubbles = payload.bubbles;
    //this.connections = payload.connections;

    console.log(this);
    this.render();
    eventHandlers();
  } else {
    // TODO: handle error. Retry?
    console.log("Empty payload in board.load()");
  }
}

Board.prototype.render = function () {
  if (this.bubbles) {
    for (var i = 0; i < this.bubbles.length; i++) {
      renderBubble(this.bubbles[i]);
    }
  }
  if (this.connections) {
    for (var i = 0; i < this.connections.length; i++) {
      renderConnections(this.connections[i].startBubbleId, this.connections[i].endBubbleId, mySVG);
    }
  }
}

Board.prototype.addBubble = function () {
}

Board.prototype.removeBubble = function () {
}

Board.prototype.renderBubble = function () {
}

Board.prototype.getBubbles = function () {
}

Board.prototype.updateBubble = function () {
}

Board.prototype.startConnection = function () {
}

Board.prototype.endConnection = function () {
}

Board.prototype.connectionExists = function () {
}

Board.prototype.removeConnection = function () {
}

Board.prototype.renderConnection = function () {
}

Board.prototype.getConnections = function () {
}

Board.prototype.updateContent = function () {
}

