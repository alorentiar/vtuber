const canvas = document.getElementById("myScreenSaver");
const ctx = canvas.getContext("2d");
const image = new Image();

image.src = "./img-needed/vtube.png";

image.onload = () => {
  ctx.drawImage(image, 0, 0, 400, 400);
};

var x = 0;
var y = 0;

function draw() {
  ctx.clear(0, 0, canvas.height, canvas.width);
  ctx.drawImage(x, y, 200, 200);

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
