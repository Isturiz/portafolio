const burgerMenu = document.querySelector('.burger-menu');
const links = document.querySelectorAll('.nav-link')
const nav = document.querySelector('#nav-container')


burgerMenu.addEventListener ('click', e => {
  console.log('work');
});

links.forEach((Element) => {
  Element.addEventListener('click', () => {
    toggleButtons();
  });
});

function toggleButtons() {
  nav.classList.toggle('menu-show')
}



