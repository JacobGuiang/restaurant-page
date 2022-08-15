export default function loadMenu() {
  const content = document.getElementById('content');

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = 'Menu';
  content.appendChild(headline);
}