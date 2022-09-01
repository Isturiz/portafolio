const btnTheme = document.querySelector('#btn-theme')
const body = document.querySelector('body')
const themes = ["lightMode", "roseMode"]


let index = 0;
load();

btnTheme.addEventListener ('click', e => {
  if (index >= themes.length) { index = 0}

  const actualMode = body.classList[0]

  body.classList.remove(actualMode)
  body.classList.add(themes[index])
  localStorage.setItem('theme', themes[index])
  index++
  localStorage.setItem('index', index.toString(10))
});

function load() {

  const theme = localStorage.getItem('theme')
  console.log(theme);

  if (!theme) {
    index = 1
    localStorage.setItem('theme', 'lightMode')
    body.classList.add(themes[index])
    index++

  } else {
    index = parseInt(localStorage.getItem('index'), 10)
    body.classList.add(theme)

  }
}