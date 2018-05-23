function mediaQuery(query) {
  let $button = document.querySelector('#burguer-button');
  let navItem = document.querySelector('.navbar-item');
  let element = 'active';
  if (query.matches) {
    $button.addEventListener('click', function() {
      toggleMenu(navItem, $button, element)
    });
  } else {
    $button.removeEventListener('click', function() {
      toggleMenu(navItem, $button, element);
    });
  }
}

function toggleMenu(navItem, $button, element) {
  let ico = $button.querySelector('svg');
  if (navItem.classList.contains(element)){
    navItem.classList.remove(element);
    ico.classList.replace('fa-times-circle', 'fa-bars');
    ico.setAttribute('data-icon', 'bars');
  } else {
    navItem.classList.add(element);
    ico.classList.replace('fa-bars', 'fa-times-circle');
    ico.setAttribute('data-icon', 'times-circle');
  }
}


window.onload = function() {
  let query = window.matchMedia('(max-width: 500px)');
  query.addListener(mediaQuery);

  mediaQuery(query);

  let all = document.querySelectorAll('.icon');
  for (let i = 1; i < all.length + 1; i ++) {
    let nav = document.querySelector('.nav-'+i);
    let $button = document.querySelector('#toggle-'+ i);
    let element = 'active_nav-'+i;
    $button.addEventListener('click', function() {
      toggleMenu(nav, $button, element);
    });
  }
}


