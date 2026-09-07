// North Star Bakery - Touchstone 4 JavaScript

document.addEventListener("DOMContentLoaded", function () {

  // Welcome message
  const welcomeButton = document.getElementById("welcomeButton");
  const welcomeMessage = document.getElementById("welcomeMessage");

  if (welcomeButton && welcomeMessage) {
    welcomeButton.addEventListener("click", function () {
      welcomeMessage.textContent =
        "Thanks for visiting North Star Bakery! We hope you find something delicious.";
    });
  }

  // Product special
  const specialButton = document.getElementById("specialButton");
  const specialMessage = document.getElementById("specialMessage");

  if (specialButton && specialMessage) {
    specialButton.addEventListener("click", function () {
      specialMessage.textContent =
        "This week's featured item is one of our freshly baked seasonal favorites!";
    });
  }

  // Contact form message
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      formMessage.textContent =
        "Thank you for contacting North Star Bakery! We will get back to you soon.";

      contactForm.reset();
    });
  }

});
