import FoodImg from './food.jpg';

export default function loadHome() {
  const content = document.getElementById('content');

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = 'The Restaurant';
  content.appendChild(headline);
  
  const img = new Image();
  img.src = FoodImg;
  content.appendChild(img);

  const copy = document.createElement('div');
  copy.classList.add('copy');
  copy.textContent = '9999 Restaurant Lane, Restaurant City';
  content.appendChild(copy);
}