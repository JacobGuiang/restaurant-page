export default function loadMenu() {
  const content = document.getElementById('content');

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = 'Menu';
  content.appendChild(headline);

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  menuContainer.id = 'menu-container';
  content.appendChild(menuContainer);

  appendToMenu('Water', '$10');
  appendToMenu('Water With Ice', '$12');
  appendToMenu('Oatmeal', '$20');
  appendToMenu('Oatmeal with Banana and Cinnamon', '$25');
}

function appendToMenu(item, price) {
  const menuContainer = document.getElementById('menu-container');

  const menuItemContainer = document.createElement('div');
  menuItemContainer.classList.add('menu-item-container');

  const menuItemName = document.createElement('div');
  menuItemName.classList.add('menu-item-name');
  menuItemName.innerText = item;
  menuItemContainer.appendChild(menuItemName);

  const menuItemPrice = document.createElement('div');
  menuItemPrice.classList.add('menu-item-price');
  menuItemPrice.innerText = price;
  menuItemContainer.appendChild(menuItemPrice);
  
  menuContainer.appendChild(menuItemContainer);
}