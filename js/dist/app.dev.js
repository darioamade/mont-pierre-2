"use strict";

var menuOpen = document.querySelector('.menu-open');
var menuClose = document.querySelector('.menu-close');
var nav = document.querySelector('.navX');
menuOpen.addEventListener('click', menuTog);
menuClose.addEventListener('click', menuTog);

function menuTog(e) {
  nav.classList.toggle('active');
}

;