/* =========================================
   Menú móvil
========================================= */
const mobileMenu = document.getElementById('mobile-menu');
const openMenuBtn = document.getElementById('mobile-menu-button');
const closeMenuBtn = document.getElementById('close-mobile-menu');

openMenuBtn?.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeMenuBtn?.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});