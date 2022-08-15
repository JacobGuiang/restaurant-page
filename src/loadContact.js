export default function loadContact() {
  const content = document.getElementById('content');

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = 'Contact Us';
  content.appendChild(headline);
}