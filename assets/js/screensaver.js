var cursortimeout = 100;
var ss_active = false;

document.getElementById("mydiv").onmousemove = cekmouse;
var counter = 0;
function cekmouse() {
  clearTimeout(cursortimeout);
  if (ss_active) {
    stop_ss();
  }
  cursortimeout = setTimeout(show_ss, 1000);
}

// mousemove(function () {

// });

function show_ss() {
  $("#screensaver").fadeIn();
  ss_active = true;
  show_animation();
}

function show_animation() {
  const canvas = document.getElementById("myScreenSaver");
  const ctx = canvas.getContext("2d");
  const image = new Image();

  ctx.canvas.height = window.innerWidth;
  ctx.canvas.width = window.innerHeight;

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
}
// function changeColor(){
//     myColor = "rgb("+ randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";
//     return myColor;
//   }
//   function randomNumber() {
//     return Math.floor(Math.random() * 256);
//   }

function stop_ss() {
  $("#screensaver").fadeOut();
  ss_active = false;
}
