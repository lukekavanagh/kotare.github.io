function Bubble (){ }

Bubble.prototype.render = function() {

  var $board = $('#board');
  var $bubble = $('<div>').attr({
    id: this.bubbleId,
    class: 'bubble'
  }).offset({
    top: this.location.top,
    left: this.location.left
  }).css({
    'width': this.size.width,
    'height': this.size.height
  });

  this.populate($bubble);

  $board.append($bubble);
}

Bubble.prototype.populate = function ($bubble) {
  var paddingPercent = 50*(1 - Math.cos(Math.PI/4))

  var $header = $('<div>').attr({ class: 'header' });
  var $link = $('<a>').attr({ class: 'link' });
  var $icon = $('<i>').attr({ class: 'fa fa-link link-image' });
  var $content = $('<div>').attr({ 
    class: 'content' 
  }).css({
    padding: paddingPercent + '%'
  });
  var $footer = $('<div>').attr({ class: 'footer' });
  var $scrollUp = $('<a>').attr({ 
    class: 'scrollUp', 
    href: '#' 
  }).html('&#9650');
  var $scrollDown = $('<a>').attr({ 
    class: 'scrollDown', 
    href: '#' 
  }).html('&#9660');

  this.specialise($content, paddingPercent);

  $bubble.append(
    $header.append($link.append($icon)), 
    $content, 
    $footer.append($scrollUp, $scrollDown)
  );
}

Bubble.prototype.specialise = function ($content, paddingPercent) {
  switch(this.type) {
    case 'text':
      $content.attr({
        contentEditable: 'true'
      }).css({
        'border-top': (paddingPercent + 15) + 'px solid transparent',
        'border-bottom': (paddingPercent + 5) + 'px solid transparent'
      }).html(this.content);
      break;

    case 'image':
      var $image = $('<img>').attr({
        class: 'bubble-image',
        src: this.sourceUrl
      }).css({
        'max-height': '100%',
        'max-width': '100%',
      });
      $content.append($image);
      break;
  }
}

//function createBubble(e){
  //var args = {
    //location: {
      //left: e.pageX,
      //top: e.pageY
    //}
  //}

  //switch(args.inputType){
    //case "image":
      //args.sourceUrl = e.sourceUrl;
      //break;
  //}

  //var bubble = new Bubble(args);
  //renderBubble(bubble);
  //board.addBubble(bubble);
//}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
