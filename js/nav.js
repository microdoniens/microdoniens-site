function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

document.addEventListener('click', (e) => {
  const m = document.getElementById('mobileMenu');
  if (m.classList.contains('open') && !e.target.closest('nav') && !e.target.closest('#mobileMenu')) {
    m.classList.remove('open');
  }
});
