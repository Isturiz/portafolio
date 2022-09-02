const open = document.querySelector('#open');
const close = document.querySelector('#close')

const burgerMenu = document.querySelector('#burger-menu'); 
const links = document.querySelectorAll('.nav-link')
const nav = document.querySelector('#nav-container')

links.forEach((Element) => {
  Element.addEventListener('click', () => {
    toggleButtons();
  });
});

burgerMenu.addEventListener("click", () => {
  toggleButtons();
  openOrClose("", "icon_none");
  console.log('work');
});


function toggleButtons() {
  nav.classList.toggle('menu-show')
}

//nameClassBtn, clases que debe de tener en el value
function openOrClose(nameClassBtn, nameClassNone) {
  //variable auxiliar encargada de guardar la clase para verificar si es un icono o el otro
  const aux = open.classList.value;
  if (aux === nameClassBtn) {
      open.classList.add(nameClassNone);
      close.classList.remove(nameClassNone);
  } else {
      open.classList.remove(nameClassNone);
      close.classList.add(nameClassNone);
  }
}



