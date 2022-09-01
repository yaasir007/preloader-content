const preloader = document.querySelector('.lds-ellipsis');
const content = document.querySelector('.content');
const hidden = document.querySelector('.hidden');
const img = document.querySelector('img');

//play preloader for 3seconds
window.addEventListener('load', function () {
  setTimeout(() => {
    preloader.classList.add('hidden');
    content.classList.remove('hidden');
  }, 3000);


})
