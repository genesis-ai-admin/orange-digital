/* LaunchKit — Coming Soon / Waitlist Template JS */

// --- Countdown Timer ---
// Set your launch date here (YYYY, month-1, day, hour, minute)
const LAUNCH_DATE = new Date(2026, 3, 15, 9, 0, 0); // April 15, 2026 at 9 AM

function updateCountdown() {
  const now = new Date();
  const diff = LAUNCH_DATE - now;

  if (diff <= 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// --- Waitlist Form ---
const form = document.getElementById('waitlistForm');
if (form) {
  // Add success message element
  const successMsg = document.createElement('p');
  successMsg.className = 'success-msg';
  successMsg.textContent = "You're on the list! We'll be in touch.";
  form.appendChild(successMsg);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;

    // In production, replace this with your actual API call
    // e.g., fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email }) })
    console.log('Waitlist signup:', email);

    form.classList.add('success');
  });
}

// --- Subtle entrance animations ---
const animateElements = () => {
  const targets = document.querySelectorAll('.badge, .main h1, .subtitle, .countdown, .email-form, .social-proof');

  targets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  });
};

animateElements();

// --- Interactive glow that follows mouse ---
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty('--mouse-x', x + '%');
  document.documentElement.style.setProperty('--mouse-y', y + '%');
});
