// JavaScript code for slider functionality
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const pagination = document.querySelector('.pagination');

let currentIndex = 0;

// Function to display current slide
function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

// Event listener for left arrow
arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slideImages.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

// Event listener for right arrow
arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex === slideImages.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

// Pagination dots
slideImages.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === currentIndex) dot.classList.add('active');
    pagination.appendChild(dot);

    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
        updateDots();
    });
});

// Function to update pagination dots
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate phone number format
function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10,11}$/; // Accepts 10 or 11 digits
    return phoneRegex.test(phoneNumber);
}


/* Connect Whatsapp to the JavaScript */
function sendwhatsapp() {
    // Get form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Validation checks
    const errors = [];

    if (!name) {
        errors.push("Name is required.");
    }
    if (!email && !phone) {
        errors.push("Either Email Address or Phone Number is required.");
    }
    if (email && !validateEmail(email)) {
        errors.push("Invalid Email Address.");
    }
    if (phone && !validatePhoneNumber(phone)) {
        errors.push("Invalid Phone Number. Please enter a 10-digit number without any spaces or special characters.");
    }
    if (!subject) {
        errors.push("Subject is required.");
    }
    if (!message) {
        errors.push("Message is required.");
    }

    // Show errors if any
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    // Construct WhatsApp message link
    var whatsappMessage = " තෙරුවන් සරණයි!!!\nනම: " + name + "\nඊතැපැල් ලිපිනය: " + email + "\nදුරකථන අංකය: " + phone + "\nමාතෘකාව: " + subject + "\nමගේ පණිවිඩය: " + message;
    var whatsappLink = "https://wa.me/+94762353258/?text=" + encodeURIComponent(whatsappMessage);

    // Open WhatsApp link
    window.open(whatsappLink);
}


/*
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission

      // Get form input values
      const fullName = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phoneNumber = document.getElementById("phone").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validation checks
      const errors = [];

      if (!fullName) {
          errors.push("Full Name is required.");
      }
      if (!email) {
          errors.push("Email Address is required.");
      } else if (!validateEmail(email)) {
          errors.push("Invalid Email Address.");
      }
      if (!phoneNumber) {
          errors.push("Phone Number is required.");
      } else if (!validatePhoneNumber(phoneNumber)) {
          errors.push("Invalid Phone Number. Please enter a 10-digit number without any spaces or special characters.");
      }
      if (!subject) {
          errors.push("Subject is required.");
      }
      if (!message) {
          errors.push("Message is required.");
      }

      // Show errors if any
      if (errors.length > 0) {
          alert(errors.join("\n"));
          return;
      }

      // Prepare email data
      const emailData = {
          to: "upekaranasinghe200@gmail.com",
          from: email,
          subject: subject,
          body: `
              Name: ${fullName}
              Email: ${email}
              Phone: ${phoneNumber}
              Message: ${message}
          `,
      };

      // Send email using SMTP.js
      Email.send(emailData)
          .then(function () {
              alert("Your message has been sent successfully!");
              form.reset(); // Reset form after successful submission
          })
          .catch(function (error) {
              console.error("Error sending email:", error);
              alert("An error occurred while sending your message. Please try again later.");
          });
  });
});

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate phone number format
function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}*/

