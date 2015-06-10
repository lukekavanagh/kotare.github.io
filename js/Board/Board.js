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
}

Board.prototype.loadCallback = function (payload) {
  if (payload) {
    console.log("Payload returning from load(): ", payload);

    $.extend(this, payload);

    console.log(this);
    this.render();
    eventHandlers();
  } else {
    // TODO: handle error. Retry?
    console.log("Empty payload in board.load()");
  }
}

