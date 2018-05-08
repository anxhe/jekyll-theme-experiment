let query = window.matchMedia('(max-width: 500px)');
query.addListener(mediaQuery);

let $button = document.querySelector('#burguer-button');
let navItem = document.querySelector('.navbar-item');

function toggleMenu() {
  let ico = $button.querySelector('svg');
  if (navItem.classList.contains('active')){
    navItem.classList.remove('active');
    ico.classList.replace('fa-times-circle', 'fa-bars');
    ico.setAttribute('data-icon', 'bars');
  } else {
    navItem.classList.add('active');
    ico.classList.replace('fa-bars', 'fa-times-circle');
    ico.setAttribute('data-icon', 'times-circle');
  }
}

function mediaQuery() {
  if (query.matches) {
    $button.addEventListener('click', toggleMenu);
  } else {
    $button.removeEventListener('click', toggleMenu);
  }
}
mediaQuery();