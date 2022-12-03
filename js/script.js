const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
hamburger.classList.toggle('hamburger-active');
menu.classList.toggle('hidden');
});