// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Fade-in animation on scroll
// (the "reveal" class is added here, so if JS fails the content stays visible)
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.classList.add('reveal');
  observer.observe(section);
});

// Contact form (demo only: connect to Formspree or EmailJS to really send)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
form.addEventListener('submit', e => {
  e.preventDefault();
  const ok = form.name.value.trim() && /^\S+@\S+\.\S+$/.test(form.email.value) && form.message.value.trim();
  statusEl.style.color = ok ? '#1a7f4b' : '#b42318';
  statusEl.textContent = ok ? 'Thanks! Your message was received (demo only).' : 'Please fill out all fields with a valid email.';
  if (ok) form.reset();
});

// Automatic year in the footer
document.getElementById('year').textContent = new Date().getFullYear();