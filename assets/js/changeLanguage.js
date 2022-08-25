const buttons = document.getElementById('btn-lang');
const textsToChange = document.querySelectorAll('[data-section]');


const changeLanguage = async language => {
  const requestJson = await fetch(`./assets/json/${language}.json`);
  const texts = await requestJson.json();

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.textContent = texts[section][value];
  }
};

buttons.addEventListener('click', e => {
  const language = e.target.dataset.language;
  if (language) {
    changeLanguage(language);
  }
});