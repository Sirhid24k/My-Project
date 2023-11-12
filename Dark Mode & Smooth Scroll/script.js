const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const h2 = document.querySelector('h2');
const button = document.querySelector('.btn');
const lorem2 = document.querySelector('.lorem2');
const lorem3 = document.querySelector('.lorem3');
const lorem4 = document.querySelector('.lorem4');
const lorem5 = document.querySelector('.lorem5');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

button.addEventListener('click', () => {
  navbar.classList.toggle('heavyDark');
  body.classList.toggle('slightDark');
  lorem2.classList.toggle('heavyDark');
  lorem4.classList.toggle('heavyDark');

  button.textContent === 'Use Dark Mode'
    ? (button.textContent = 'Use Light Mode')
    : (button.textContent = 'Use Dark Mode');
  h2.textContent === 'Light Mode'
    ? (h2.textContent = 'Dark Mode')
    : (h2.textContent = 'Light Mode');
});

home.addEventListener('click', () => {
  lorem3.scrollIntoView({ behavior: 'smooth' });
});
about.addEventListener('click', () => {
  lorem4.scrollIntoView({ behavior: 'smooth' });
});
contact.addEventListener('click', () => {
  lorem5.scrollIntoView({ behavior: 'smooth' });
});
