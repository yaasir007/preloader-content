const preloader = document.querySelector('.lds-ellipsis');
const content = document.querySelector('.content');
const hidden = document.querySelector('.hidden');
const img = document.querySelector('img');




//play preloader for 3seconds
window.addEventListener('load', function () {
  setTimeout(() => {
    preloader.classList.add('hidden');
    content.classList.remove('hidden');
    content.classList.add('test');
  }, 3000);

  //then load content
  setTimeout(() => {
    content.classList.remove('test');
  }, 8000);

})
