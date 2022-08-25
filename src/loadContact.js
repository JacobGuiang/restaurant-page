export default function loadContact() {
  const content = document.getElementById('content');

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = 'Contact';
  content.appendChild(headline);

  const contactsContainer = document.createElement('div');
  contactsContainer.classList.add('contacts-container');
  contactsContainer.id = 'contacts-container';
  content.appendChild(contactsContainer);

  appendContact('Phone', '+9 999-999-9999');
  appendContact('Email', 'restaurant@gmail.com');
}

function appendContact(name, details) {
  const contactsContainer = document.getElementById('contacts-container');

  const contactItemContainer = document.createElement('div');
  contactItemContainer.classList.add('contact-item-container');

  const contactItemName = document.createElement('div');
  contactItemName.classList.add('contact-item-name');
  contactItemName.innerText = name;
  contactItemContainer.appendChild(contactItemName);

  const contactItemsDetails = document.createElement('div');
  contactItemsDetails.classList.add('contact-item-details');
  contactItemsDetails.innerText = details;
  contactItemContainer.appendChild(contactItemsDetails);
  
  contactsContainer.appendChild(contactItemContainer);
}