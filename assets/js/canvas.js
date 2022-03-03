const canvas = document.getElementById("myScreenSaver");
const ctx = canvas.getContext("2d");
const image = new Image();

var body = document.body,
  html = document.documentElement;

ctx.canvas.width = 1080;
ctx.canvas.height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

image.src = "./assets/images/vtube.png";

image.onload = () => {
  image.height = "50px";
  image.width = "50px";
  ctx.drawImage(image, 500, 500);
};

let x = 0;
let y = 1100;

function draw() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage(image, x, y);

  if (x <= 0) {
    Xcoor = 1;
  } else if (x >= ctx.canvas.width - 100) {
    Xcoor = -1;
  }

  if (y <= 1100) {
    Ycoor = 1;
  } else if (y >= ctx.canvas.height - 100) {
    Ycoor = -1;
  }

  x = x + Xcoor;
  y = y + Ycoor;

  window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
