// Optional JS approach to toggle nav
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  
  toggle.addEventListener('change', () => {
    nav.classList.toggle('open', toggle.checked);
  });
});
