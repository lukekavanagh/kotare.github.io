var board = (function () {

  var boardData = {};

  function save() {
    ApiFacade.putBoard(boardData, function (payload) {
      // TODO: use response here in some fashion? Error handling?
      console.log("Payload returning from save(): ", payload);
    });
  }

  function load() {
    // Don't make an API call if _id already set
    if (!boardData._id) {
      ApiFacade.retrieveBoard(function (payload) {
        if (payload) {
          console.log("Payload returning from load(): ", payload);
          $.extend(boardData, payload);
          render();
        } else {
          // TODO: handle error. Retry?
          console.log("Empty payload in board.load()");
        }
      });
    }
  }

  function render() {
    if (!boardData.bubbles) {
      boardData.bubbles = [];
    }
    if (!boardData.connections) {
      boardData.connections = [];
    }
    bubbles = getBubbles();
    for (var i = 0; i < bubbles.length; i++) {
      renderBubble(bubbles[i]);
    }
    connections = getConnections();
    for (var i = 0; i < connections.length; i++) {
      renderConnections(connections[i].startBubbleId, connections[i].endBubbleId, mySVG);
    }
  }

  function addBubble(bubble) {
    getBubbles().push(bubble);
    save();
  }

  function removeBubble(id) {
    for (var i = 0; i < boardData.bubbles.length; i++) {
      if (id === boardData.bubbles[i]._id) {
        boardData.bubbles.splice(i, 1);
        return;
      }
    }
    save();
  }

  function getBubbles() {
    return boardData.bubbles;
  }

  function updateBubble() {
  }

  function addConnection() {
    boardData.connections.push(connection);
    save();
  }

  function removeConnection() {
    for (var i = 0; i < boardData.connections.length; i++) {
      if (id === boardData.connections[i]._id) {
        boardData.connections.splice(i, 1);
        return;
      }
    }
    save();
  }

  function getConnections() {
    return boardData.connections;
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

