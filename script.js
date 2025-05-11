// 1. Greeting Function on Page Load
function greetUser() {
    const greeting = document.getElementById("greeting-message");
    if (!greeting) return;
  
    const hour = new Date().getHours();
    let message = "";
  
    if (hour < 12) {
      message = "Good morning!";
    } else if (hour < 18) {
      message = "Good afternoon!";
    } else {
      message = "Good evening!";
    }
  
    greeting.textContent = `${message} Welcome to my portfolio!`;
  }
  
  // 2. Dark/Light Mode Toggle
  function setupThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;
  
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
  
      if (document.body.classList.contains("dark-theme")) {
        toggleBtn.textContent = "Light Mode";
      } else {
        toggleBtn.textContent = "Dark Mode";
      }
    });
  }
  
  // 3. Toggle Project Details (for Projects Page)
  function setupProjectToggles() {
    const toggleButtons = document.querySelectorAll(".toggle-details");
  
    toggleButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const details = btn.nextElementSibling;
        if (details) {
          details.classList.toggle("visible");
          btn.textContent = details.classList.contains("visible") ? "Hide Details" : "Show Details";
        }
      });
    });
  }
  
  // 4. Contact Form Validation (for Contact Page)
  function validateContactForm(event) {
    const email = document.getElementById("contact-email");
    const phone = document.getElementById("contact-phone");
    const message = document.getElementById("contact-message");
  
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
  
    if (!email.value || !emailPattern.test(email.value)) {
      alert("Please enter a valid email.");
      event.preventDefault();
      return;
    }
  
    if (phone.value && !phonePattern.test(phone.value)) {
      alert("Please enter a valid phone number.");
      event.preventDefault();
      return;
    }
  
    if (!message.value) {
      alert("Please fill in the message.");
      event.preventDefault();
      return;
    }
  
    alert("Thank you for your message!");
  }
  
  // 5. Survey Form Validation (for Survey Page)
  function validateSurveyForm(event) {
    const name = document.getElementById("survey-name").value.trim();
    const email = document.getElementById("survey-email").value.trim();
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    const source = document.querySelector('input[name="source"]:checked');
    const tech = document.querySelectorAll('input[name="tech"]:checked');
  
    if (!name || !email) {
      alert("Please fill in all required fields.");
      event.preventDefault();
      return;
    }
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return;
    }
  
    if (!source) {
      alert("Please select how you heard about me.");
      event.preventDefault();
      return;
    }
  
    if (tech.length === 0) {
      alert("Please select at least one technology.");
      event.preventDefault();
      return;
    }
  
    alert("Thank you for your feedback!");
    event.target.reset();
  }
  
  // 6. Run all functions on page load
  window.addEventListener("DOMContentLoaded", () => {
    greetUser();
    setupThemeToggle();
    setupProjectToggles();
  
    // Attach form validation for contact and survey forms
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", validateContactForm);
    }
  
    const surveyForm = document.getElementById("surveyForm");
    if (surveyForm) {
      surveyForm.addEventListener("submit", validateSurveyForm);
    }
  });
  