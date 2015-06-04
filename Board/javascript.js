var Board = function( selector ) {

  var $elem = $( selector );
  
  function initialize() {
   
  };

  initialize();
};


function Bubble (x,y){
	this.header ="this is the header";
	this.content ="this is the content";
	this.xOffset=x;
	this.yOffset=y;
};

$(function(){
	new Board('#board');
	$("#board").on("click", function(e){
		renderBubble(new Bubble(e.pageY, e.pageX));
	});
});

function renderBubble(bubble) {
	$('#board').append(
		"<div class='bubble'>" +
		"<div class='header'></div>" +
		"<div class='content'></div>"+"</div>")

	$(".bubble:last ").offset({top: bubble.xOffset, left: bubble.yOffset});
}