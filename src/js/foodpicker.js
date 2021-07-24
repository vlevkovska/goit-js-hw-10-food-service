import menuCardTpl from '../templates/food-cards.hbs';
import menu from '../menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const SWITCH_TOGGLE = 'theme';

const refs = {
  themeSwitch: document.querySelector('.theme-switch__toggle'),
  bodyTheme: document.querySelector('body'),
};

refs.bodyTheme.classList.add(Theme.LIGHT);
refs.themeSwitch.addEventListener('change', onChangeTheme);

// тема по-умолчанию
function onChangeTheme(event) {
  if (!refs.bodyTheme.classList.contains(Theme.DARK)) {
    localStorage.setItem(SWITCH_TOGGLE, Theme.DARK);
    refs.bodyTheme.classList.add(Theme.DARK);
  } else if (refs.bodyTheme.classList.contains(Theme.DARK)) {
    localStorage.setItem(SWITCH_TOGGLE, Theme.LIGHT);
    refs.bodyTheme.classList.remove(Theme.DARK);
    refs.bodyTheme.classList.add(Theme.LIGHT);
  }
}

// Популярная тема
function populateThemeLocal() {
  const savedTheme = localStorage.getItem(SWITCH_TOGGLE);

  if (savedTheme === Theme.DARK) {
    refs.themeSwitch.checked = true;
    refs.bodyTheme.classList.add(Theme.DARK);
  } else if (savedTheme !== Theme.DARK) {
    refs.bodyTheme.classList.add(Theme.LIGHT);
    refs.themeSwitch.checked = false;
  }
}
populateThemeLocal();

// створення розмітки

function createMenuCardsMarkup(menu) {
  // return menu.map(menuCardTpl(menu)).join('');
  return menu.map(menuCardTpl).join('');
}
