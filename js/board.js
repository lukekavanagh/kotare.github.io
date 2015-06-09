var board = (function () {

  function save() {
    ApiFacade.putBoard(function (payload) {
      // TODO: use response here in some fashion? Error handling?
    });
  }

  function load() {
    // Don't make an API call if _id already set
    if (!this._id) {
      ApiFacade.retrieveBoard(function (payload) {
        if (payload) {
          $.extend(this, payload);
        } else {
          // TODO: handle error. Retry?
          console.log("Empty payload in board.load()");
        }
      });
    }
  }

  function addBubble() {
  }

  function removeBubble() {
  }

  function getBubbles() {
    return this.bubbles;
  }

  function updateBubble() {
  }

  function addConnection() {
  }

  function removeConnection() {
  }

  function getConnections() {
    return this.connections;
  }

  return {
    save: save,
    load: load,
    addBubble: addBubble,
    removeBubble: removeBubble,
    getBubbles: getBubbles,
    updateBubble: updateBubble,
    addConnection: addConnection,
    removeConnection: removeConnection,
    getConnections: getConnections
  };
})();

