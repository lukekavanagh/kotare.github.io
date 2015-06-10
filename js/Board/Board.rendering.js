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

