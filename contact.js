// contact.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  // Input fields
  const fullName = document.getElementById("full-name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // Error containers
  const errors = {
    name: document.getElementById("error-full-name"),
    email: document.getElementById("error-email"),
    subject: document.getElementById("error-subject"),
    message: document.getElementById("error-message"),
  };

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Clear all errors
  function clearErrors() {
    Object.values(errors).forEach((err) => {
      err.textContent = "";
    });
  }

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();
    let isValid = true;

    // Validate Full Name
    if (fullName.value.trim() === "") {
      errors.name.textContent = "Full name is required.";
      isValid = false;
    }

    // Validate Email
    if (email.value.trim() === "") {
      errors.email.textContent = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      errors.email.textContent = "Please enter a valid email.";
      isValid = false;
    }

    // Validate Subject
    if (subject.value.trim() === "") {
      errors.subject.textContent = "Subject is required.";
      isValid = false;
    }

    // Validate Message
    if (message.value.trim() === "") {
      errors.message.textContent = "Message is required.";
      isValid = false;
    } else if (message.value.trim().length < 10) {
      errors.message.textContent = "Message must be at least 10 characters.";
      isValid = false;
    }

    // Show success or focus on first error
    if (isValid) {
      successMessage.hidden = false;
      form.reset();
      fullName.focus();
    } else {
      successMessage.hidden = true;
      // Focus the first field with error
      const firstError = Object.keys(errors).find(
        (key) => errors[key].textContent !== ""
      );
      if (firstError) {
        document
          .getElementById(
            firstError === "name"
              ? "full-name"
              : firstError === "email"
              ? "email"
              : firstError === "subject"
              ? "subject"
              : "message"
          )
          .focus();
      }
    }
  });
});
