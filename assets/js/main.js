// Update footer year when present
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobile menu sheet toggles (optional on sub-pages)
const panel = document.getElementById('mobilePanel');
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');

function hideMenu() {
  if (panel) {
    panel.style.display = 'none';
  }
}

if (panel && openBtn && closeBtn) {
  openBtn.addEventListener('click', () => panel.style.display = 'block');
  closeBtn.addEventListener('click', hideMenu);
  window.hideMenu = hideMenu;
} else {
  window.hideMenu = hideMenu;
}

// Simple reveal on scroll
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('show'));
}
