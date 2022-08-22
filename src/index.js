import loadHome from './loadHome.js';
import loadMenu from './loadMenu.js';
import loadContact from './loadContact.js';
import './style.css';

function initPageLoad() {
  const content = document.getElementById('content');

  const nav = document.createElement('div');
  nav.classList.add('nav');

  const navHome = document.createElement('div');
  navHome.textContent = 'Home';

  navHome.addEventListener('click', () => {
    content.replaceChildren();
    loadHome();
  });

  nav.appendChild(navHome);

  const navMenu = document.createElement('div');
  navMenu.textContent = 'Menu';

  navMenu.addEventListener('click', () => {
    content.replaceChildren();
    loadMenu();
  });

  nav.appendChild(navMenu);

  const navContact = document.createElement('div');
  navContact.textContent = 'Contact';

  navContact.addEventListener('click', () => {
    content.replaceChildren();
    loadContact();
  });

  nav.appendChild(navContact);
  document.body.insertBefore(nav, document.body.firstChild);

  loadHome();
}

initPageLoad();