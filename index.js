const preloader = document.querySelector('.lds-ellipsis');
const content = document.querySelector('.content');

const fadeOutEffect = setInterval(() => {
  preloader.classList.add('hidden')
}, 3000);

window.addEventListener('load', fadeOutEffect);
