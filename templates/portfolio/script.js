/* LaunchKit — Portfolio Template JS */

// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navBtn = document.querySelector('.nav .btn');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';

    if (!isOpen) {
      Object.assign(navLinks.style, {
        position: 'absolute',
        top: '72px',
        left: '0',
        right: '0',
        flexDirection: 'column',
        padding: '16px 24px',
        background: '#fff',
        borderBottom: '1px solid #e2e8f0',
        gap: '12px'
      });
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Navbar shadow on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10
    ? '0 1px 3px rgba(0,0,0,0.08)'
    : 'none';
});

// Animate elements on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    '.project-card, .service-card, .testimonial-card, .stat, .about-content, .about-image, .contact-info, .contact-form-wrap'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    observer.observe(el);
  });
};

animateOnScroll();

// Contact form handling (demo)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent!';
    btn.disabled = true;
    btn.style.background = '#22c55e';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      btn.style.background = '';
      form.reset();
    }, 2500);
  });
}
