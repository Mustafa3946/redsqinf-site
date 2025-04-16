// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.animate').forEach(el => observer.observe(el));
  
  // Dark mode toggle
  const toggle = document.getElementById('darkModeToggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Contact form handling
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('form-status');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Sending...';
  
    const formData = new FormData(form);
  
    try {
      const response = await fetch('https://your-backend-endpoint.com/contact', {
        method: 'POST',
        body: JSON.stringify({
          email: formData.get('email'),
          message: formData.get('message'),
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        statusEl.textContent = 'Thanks! Message sent.';
        form.reset();
      } else {
        statusEl.textContent = 'Oops, something went wrong.';
      }
    } catch (err) {
      console.error(err);
      statusEl.textContent = 'Could not send. Try again later.';
    }
  });
  