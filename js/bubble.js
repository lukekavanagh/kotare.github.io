function Bubble (args){
  this.type = args.inputType;
  this.bubbleId=args.id;
  this.sourceUrl=args.sourceUrl;
  this.content ="";
  this.size = {
    height: "160px",
    width: "160px"
  };
  this.location = args.location
}

function createBubble(e){
  var args = {
    inputType: e.inputType,
    id: helper.guid(),
    sourceUrl: "",
    location: {
      left: e.pageX,
      top: e.pageY
    }
  }

  switch(args.inputType){
    case "image":
      args.sourceUrl = e.sourceUrl;
      break;
  }

  var bubble = new Bubble(args);
  renderBubble(bubble);
  board.addBubble(bubble);
}
