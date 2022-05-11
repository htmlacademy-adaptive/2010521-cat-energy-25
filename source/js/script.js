let mainHeader = document.querySelector('.main-header');
let mainHeaderToggleButton = document.querySelector('.main-header__menu-toggle');

mainHeader.classList.remove('main-header--nojs');

mainHeaderToggleButton.addEventListener('click', function () {
  if (mainHeader.classList.contains('main-header--menu-opened')) {
    mainHeader.classList.remove('main-header--menu-opened');
  } else {
    mainHeader.classList.add('main-header--menu-opened');
  }
});
