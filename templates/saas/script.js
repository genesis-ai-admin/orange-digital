/* LaunchKit — SaaS Landing Page Template JS */

// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navActions.style.display = isOpen ? 'none' : 'flex';

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
      Object.assign(navActions.style, {
        position: 'absolute',
        top: `${72 + navLinks.offsetHeight}px`,
        left: '0',
        right: '0',
        flexDirection: 'column',
        padding: '0 24px 16px',
        background: '#fff',
        borderBottom: '1px solid #e2e8f0',
        gap: '8px'
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

// Navbar background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Animate elements on scroll (simple IntersectionObserver)
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    '.feature-card, .step, .price-card, .testimonial-card, .faq-item'
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

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
};

animateOnScroll();
