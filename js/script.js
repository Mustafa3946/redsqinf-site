// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
  
  // Example of a Button Click Alert
  document.querySelector('.button').addEventListener('click', function() {
    alert('Thank you for reaching out! We will get back to you soon.');
  });
  