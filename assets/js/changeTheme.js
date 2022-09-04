const btnTheme = document.querySelector('#btn-theme')
const btnTheme1 = document.querySelector('#btn-theme1')
const body = document.querySelector('body')

load();


btnTheme.addEventListener ('click', e => {
  body.classList.toggle('darkmode')
  /* 
  store(body.classList.contains('darkmode'))
   */
  if (body.classList.contains('darkmode')) {
    localStorage.setItem('darkmode', 'true')
  } else {
    localStorage.setItem('darkmode', 'false')
  }
});

btnTheme1.addEventListener ('click', e => {
  body.classList.toggle('darkmode')
  /* 
  store(body.classList.contains('darkmode'))
   */
  if (body.classList.contains('darkmode')) {
    localStorage.setItem('darkmode', 'true')
  } else {
    localStorage.setItem('darkmode', 'false')
  }
});

function load() {

  const darkmode = localStorage.getItem('darkmode')
  console.log(darkmode);

  if (darkmode === 'false') {
    store('false')

  } else if (darkmode === 'true'){
    body.classList.add('darkmode')
  }
}

function store(value) {

  localStorage.setItem('darkmode', value.toString())

}