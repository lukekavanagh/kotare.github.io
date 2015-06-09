<script type="text/javascript">
var layer1;
var layer2;

var ctx1;
var ctx2;

var x = 400;
var y = 300;
var dx = 2;
var dy = 4;
var WIDTH = 400;
var HEIGHT = 300;
var city = new Image();

function init() {
city.src ="city.png";
layer1 = document.getElementById("layer1");
ctx1 = layer1.getContext("2d");
layer2 = document.getElementById("layer2");
ctx2 = layer2.getContext("2d");

setInterval(drawAll, 20);
}

function drawAll() {
draw1();
draw2();
}

function draw1() {
ctx1.clearRect(0, 0, WIDTH, HEIGHT);
ctx1.fillStyle = "#FAF7F8";
ctx1.beginPath();
ctx1.rect(0,0,WIDTH,HEIGHT);
ctx1.closePath();
ctx1.fill();
ctx1.fillStyle = "#444444";
ctx1.beginPath();
ctx1.arc(x, y, 10, 0, Math.PI*2, true);
ctx1.closePath();
ctx1.fill();

if (x + dx > WIDTH || x + dx < 0)
dx = -dx;
if (y + dy > HEIGHT || y + dy < 0)
dy = -dy;

x += dx;
y += dy;
}

function draw2() {
ctx2.clearRect(0, 0, WIDTH, HEIGHT);
ctx2.drawImage(city, 0, 0);
}

function draw3() {
ctx3.clearRect(0, 0, WIDTH, HEIGHT);
ctx3.fillStyle = "#444444";
ctx3.save();
ctx3.translate(200,200);
ctx3.rotate(x/20);
ctx3.fillRect(-15, -15, 30, 30);
ctx3.restore();
}

init();
</script>
