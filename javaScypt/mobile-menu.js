const mobileMenu = document.querySelector('.mobile-menu');
const menulBtnOpen = document.querySelector('.menu-btn-open');
const menulBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menulBtnOpen.addEventListener('click', toggleMenu);
menulBtnClose.addEventListener('click', toggleMenu);
