const btnTheme = document.querySelector('#btn-theme')
const body = document.querySelector('body')
let i = 1
const themes = ["pulpfictionMode","lightMode", "darkMode"]

load();

btnTheme.addEventListener ('click', e => {
  
  body.classList.remove(body.classList[0])
  body.classList.add(themes[i])
  store(body.classList[0])
  
  i = i + 1
  if (i === themes.length) { i = 0}
});

function load() {

  const theme = localStorage.getItem('theme')

  if (!theme) {
    store(themes[i])
  } else {
    body.classList.add(theme)
  }
}

function store(value) {

  localStorage.setItem('theme', value)

}
