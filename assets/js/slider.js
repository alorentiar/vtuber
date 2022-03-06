let slides = document.getElementsByClassName("slide");

let nowSlide = 0;

function changeSlide(e) {
  if (e >= slides.length) {
    e = 0;
  }
  if (e < 0) {
    e = slides.length - 1;
  }

  slides[nowSlide].classList.toggle("active");
  slides[e].classList.toggle("active");

  nowSlide = e;
}

document.getElementById("controlNext").addEventListener("click", () => {
  changeSlide(nowSlide + 1);
});

document.getElementById("controlPrev").addEventListener("click", () => {
  changeSlide(nowSlide - 1);
});
