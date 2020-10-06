"use strict";

var checkAv = document.getElementById('checkbox');
checkAv.addEventListener('click', function () {
  alert('Page in development 🧑‍💻 ');
});
var btbReduceSize = document.getElementById('btbReduceSize');
btbReduceSize.addEventListener('click', function () {
  alert('Page in development 🧑‍💻 ');
}); // let buttonX = document.getElementById('.banner-btn');
// buttonX.addEventListener('click', () => {
//     alert('Page in development 🧑‍💻 ')
// })
// (function(
//     'use strict';
//     let newElement = document.createElement('div');
//     newElement.textContent = "I am a new Element";
//     let list = document.querySelector('#myList')
//     // let list = document.getElementsById('myList');
//     //  list.appendChild(newElement);
//      list.insertBefore(newElement, list.firstElementChild);
//      let replaceElement = document.createElement('li');
//      replaceElement.textContent = 'I am replacing you'
//     list.replaceChild(replaceElement, newElement);
//     console.log(newElement)
// }());
//
// let newLi = document.createElement('li');
// let newA = document.createElement('a');
// let menu = document.getElementById('myList').getElementsByClassName('menu-open')[0];
// menu.appendChild(newLi);
// newLi.appendChild(newA);
// newA.innerHTML ='Blog';
// const elem = document.createElement('h1');
// // console.log(elem);
// const elemText = document.createTextNode('This is a Div');
// elem.appendChild(elemText);
// document.body.appendChild(elem);

var menuOpen = document.querySelector('.menu-open');
var menuClose = document.querySelector('.menu-close');
var navX = document.querySelector('.navX');
menuOpen.addEventListener('click', menuTog);
menuClose.addEventListener('click', menuTog);

function menuTog(e) {
  navX.classList.toggle('active');
}

;