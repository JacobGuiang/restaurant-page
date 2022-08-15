import FoodImg from './food.jpg';

export default function loadPage() {
  const content = document.getElementById('content');

  const img = new Image();
  img.src = FoodImg;
  content.appendChild(img);

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = 'Restaurant Name';
  content.appendChild(headline);

  const copy = document.createElement('div');
  copy.classList.add('copy');
  copy.textContent = 'This restaurant is wonderful!';
  content.appendChild(copy);
}