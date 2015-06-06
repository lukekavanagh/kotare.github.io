function renderConnections(firstBubbleId, secondBubbleId) {
  var mySVG = $('body').connect();
  mySVG.drawLine({
    left_node:'#' + firstBubbleId,
    right_node:'#' + secondBubbleId,
  });
}