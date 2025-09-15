// (function () {
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     })
// })();

(function () {
  // Navigation controls
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });

  // Theme toggle
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });

  // Initialize EmailJS
  emailjs.init("hFpUAq4gr4amVCelH"); // ⚡ replace with your EmailJS Public Key

  // Form submit handler
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // stop reload

      emailjs.sendForm("service_wucj1fn", "template_6uayn4g", this).then(
        () => {
          alert("✅ Message Sent Successfully!");
          contactForm.reset(); // clear form
        },
        (err) => {
          console.error("❌ Failed:", err);
          alert("❌ Failed to send message. Try again later.");
        }
      );
    });
  }
})();
