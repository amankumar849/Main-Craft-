// Fade in on scroll animation
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in', 'visible');
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Form submission alert (demo)
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your message has been received. (This is a demo)');
      form.reset();
    });
  }
});