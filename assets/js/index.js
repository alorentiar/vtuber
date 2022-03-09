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
  let email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var address = document.getElementById("address");
  var paypal = document.getElementById("paypal");
  var skrill = document.getElementById("skrill");

  if (name.value == "") {
    alert("Name cannot be empty");
  } else if (name.value.length <= 3) {
    window.alert("Name must be at least 3 characters");
  } else if (!genderMale.checked && !genderFemale.checked) {
    window.alert("Gender must be selected");
  } else if ((email.value.length = 0)) {
    window.alert("email cannot be empty");
  } else if (!email.contains("@") && !email.endsWith(".com")) {
    window.alert("Please provide a valid email that includes @ and ends with .com");
  } else if (phone.value == "") {
    window.alert("phone cannot be empty");
  } else if (!phone.startsWith("+81") || phone.length != 14) {
    window.alert("please provide a valid phone number, must starts with +81 and must be 11 digits excluding +81");
  } else if (!address.value == "") {
    window.alert("Address cannot be empty");
  } else if (!address.endsWith("Street")) {
    window.alert("Please provide Street in the end of address");
  } else if (!paypal.checked && !skrill.checked) {
    window.alert("Method of payment must be selected");
  } else {
    window.alert("Method of payment must be selected");
    localStorage.clear();
  }
}
