// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Contact form
// Option A (default): opens the user's email client with the message pre-filled.
// Option B: swap in Formspree / EmailJS (see README) to send messages without a mail client.
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  const mailto = `mailto:nitinkumarrajvanshi6@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `From: ${name} (${email})\n\n${message}`
  )}`;

  window.location.href = mailto;
  note.textContent = "Opening your email app…";
  form.reset();
});
