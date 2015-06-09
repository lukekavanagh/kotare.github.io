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

