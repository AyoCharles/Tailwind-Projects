'use strict';

const burger = document.querySelector('#burger');
const menu = document.querySelector('.menu');
const menu2 = document.querySelector('.menu2');

burger.addEventListener('click', function() {
    if(menu.classList.contains('hidden') && menu2.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu2.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
        menu2.classList.add('hidden');
    }
});