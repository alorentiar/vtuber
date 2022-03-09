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
  console.log("oke");

  let name = "";
  let male = "";
  let female = "";
  let email = "";
  let phone = "";
  let address = "";
  let paypal = "";
  let skrill = "";

  name = document.getElementById("name");
  male = document.getElementById("maleB");
  female = document.getElementById("femaleB");
  email = document.getElementById("email");
  phone = document.getElementById("phone");
  address = document.getElementById("address");
  paypal = document.getElementById("paypal");
  skrill = document.getElementById("skrill");

  if (name.value.length === 0) {
    alert("Name cannot be empty");
  } else if (name.value.length <= 3) {
    alert("Name must be at least more than 3 characters");
  }
  if (!male.checked && !female.checked) {
    alert("gender must be selected");
  }

  if (email.value.length === 0) {
    alert("email cannot be empty");
  } else if (!email.value.includes("@") && !email.value.endsWith(".com")) {
    alert("Please provide a valid email that includes @ and ends with .com");
  }
  if (phone.value.length === 0) {
    alert("phone cannot be empty");
  } else if (!phone.value.startsWith("+81") || phone.value.length != 14) {
    alert("please provide a valid phone number, must starts with +81 and must be 11 digits excluding +81");
  }
  if (!address.value.length === 0) {
    alert("Address cannot be empty");
  } else if (!address.value.endsWith("Street")) {
    alert("Please provide Street in the end of address");
  }

  if (!paypal.checked && !skrill.checked) {
    alert("Method of payment must be selected");
  } else {
    localStorage.clear();
  }
}
