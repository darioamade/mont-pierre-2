
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('.navX');

menuOpen.addEventListener('click', menuTog);
menuClose.addEventListener('click', menuTog);

function menuTog(e){
  nav.classList.toggle('active')
};