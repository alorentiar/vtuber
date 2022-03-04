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

function validate() {
  var name = document.getElementById("name");
  var genderMale = document.getElementById("male");
  var genderFemale = document.getElementById("female");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var address = document.getElementById("address");

  let nameLen = name.length;

  if (nameLen <= 3) {
    return window.alert("Name must be at least 3 characters");
  }

  if (genderMale == false && genderFemale == false) {
    return window.alert("Gender must be selected");
  }

  if (email.matches("@") == false || email.endsWith(".com") == false) {
    return window.alert("Please provide a valid email");
  }

  if (phone.startsWith("+81") == false || phone.length == 14) {
    return window.alert("please provide a valid phone number, must starts with +81 and must be 11 digits excluding +81");
  }

  if (address.endsWith("Street") == false) {
    return window.alert("Please provide Street in the end of address");
  }
}
