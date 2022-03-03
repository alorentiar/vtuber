const canvas = document.getElementById("myScreenSaver");
const ctx = canvas.getContext("2d");
const image = new Image();
// const scrollHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

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
  } else if (x >= ctx.canvas.width - 100) {
    controlX = -1;
  }

  if (y <= 0) {
    controlY = 1;
  } else if (y >= ctx.canvas.height - 100) {
    controlY = -1;
  }

  x = x + controlX;
  y = y + controlY;

  window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
