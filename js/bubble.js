function Bubble (args){
  this.type = args.type;
  this.bubbleId=args.id;
  this.sourceURL=args.URL;
  this.content ="";
  this.size = {
    left: "160px",
    top: "160px"
  };
  this.location = {
    left: args.left,
    top: args.top
  };
};
