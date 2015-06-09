var board = (function () {

  function save() {
  }

  function load() {
    ApiFacade.retrieveBoard(function (data) {
      if (!this._id && data) {
        this.extend(data);
      }
    });
  }

  function addBubble() {
  }

  function removeBubble() {
  }

  function addConnection() {
  }

  function removeConnection() {
  }

  return {
    save: save,
    load: load,
    addBubble: addBubble,
    removeBubble: removeBubble,
    addConnection: addConnection,
    removeConnection: removeConnection
  };
})();

Board.prototype.save() {
  ApiFacade.putBoard(function (data) {

  });
}


