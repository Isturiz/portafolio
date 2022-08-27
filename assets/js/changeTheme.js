const btnTheme = document.querySelector('#btn-theme')
const body = document.querySelector('body')
let i = 0
const themes = ["pulpfictionMode","lightMode", "roseMode"]

//localStorage.setItem('theme', 'lightMode')
load();

btnTheme.addEventListener ('click', e => {
  
  if (body.classList[0] === themes[i]) {
    body.classList.remove(body.classList[0])
    body.classList.add(themes[i + 1])
    localStorage.setItem('theme', themes[i + 1])
    i = i + 2
    if (i >= themes.length) { i = 0}
    localStorage.setItem('index', i)

  }else {
    body.classList.remove(body.classList[0])
    body.classList.add(themes[i])
    
    localStorage.setItem('theme', themes[i])
    i = i + 1
    if (i >= themes.length) { i = 0}
    localStorage.setItem('index', i)

  }

  //store(themes[i])
  
  
});

function load() {

  const theme = localStorage.getItem('theme')

  if (!theme) {
    store('lightMode')
  } else {
    body.classList.add(theme)
  }
}

function store(value) {

  localStorage.setItem('theme', value)
}
