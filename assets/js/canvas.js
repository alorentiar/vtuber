const canvas = document.getElementById("myScreenSaver");
const ctx = canvas.getContext("2d");
const image = new Image();

ctx.canvas.height = window.innerWidth;
ctx.canvas.width = window.innerHeight;

canvas.width = 1080;
canvas.height = 720;

image.src = "./assets/images/vtube.png";

image.onload = () => {
  image.height = "50px";
  image.width = "50px";
  ctx.drawImage(image, 100, 100);
};

var x = 0;
var y = 0;

function draw() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //   ctx.fillRect(x, y, 200, 200);
  ctx.drawImage(image, x, y);

  if (x <= 0) {
    controlX = 1;
  } else if (x >= canvas.width - 100) {
    controlX = -1;
  }

  if (y <= 0) {
    controlY = 1;
  } else if (y >= canvas.height - 100) {
    controlY = -1;
  }

  x = x + controlX;
  y = y + controlY;

  window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
