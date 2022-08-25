import loadHome from './loadHome.js';
import loadMenu from './loadMenu.js';
import loadContact from './loadContact.js';
import './style.css';

function initPageLoad() {
  const content = document.getElementById('content');

  const nav = document.createElement('ul');
  nav.classList.add('nav');

  const navHome = document.createElement('li');
  const navHomeLink = document.createElement('a');
  navHomeLink.textContent = 'Home';
  navHome.appendChild(navHomeLink);

  navHomeLink.addEventListener('click', () => {
    content.replaceChildren();
    loadHome();
  });

  nav.appendChild(navHome);

  const navMenu = document.createElement('li');
  const navMenuLink = document.createElement('a');
  navMenuLink.textContent = 'Menu';
  navMenu.appendChild(navMenuLink);

  navMenuLink.addEventListener('click', () => {
    content.replaceChildren();
    loadMenu();
  });

  nav.appendChild(navMenu);

  const navContact = document.createElement('li');
  const navContactLink = document.createElement('a');
  navContactLink.textContent = 'Contact';
  navContact.appendChild(navContactLink);

  navContactLink.addEventListener('click', () => {
    content.replaceChildren();
    loadContact();
  });

  nav.appendChild(navContact);
  document.body.insertBefore(nav, document.body.firstChild);

  loadHome();
}

initPageLoad();