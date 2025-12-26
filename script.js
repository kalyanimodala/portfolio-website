const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // Inputs
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  // Name validation
  if (name.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  }

  // Message validation
  if (message.value.trim() === "") {
    document.getElementById("messageError").textContent = "Message is required";
    valid = false;
  }

  // Success
  if (valid) {
    document.getElementById("successMsg").textContent =
      "Message sent successfully!";
    form.reset();
  }
});
