$(document).ready(() => {
  //SLIDER
  const images = ["./assets/images/event_1.png", "./assets/images/event_2.png", "./assets/images/event_3.png"];

  const text = ["tes", "tes", "tes"];

  let slides = "";

  images.forEach((val, index) => {
    slides += `<div class="image-event"><img src='${val}'/></div>`;
  });

  const slides_container = $(".slides");
  slides_container.html(slides);

  function startSlider() {
    $(".slides > div:first").fadeOut(500).next().fadeIn(500).end().appendTo(".slides");
  }

  setInterval(startSlider, 2000);
});

//POP UP
function joinvtuber() {
  alert("You are applied to this vtuber program!");
}
