const display = document.querySelector('.display');
const equalSign = document.querySelector('.equal-sign');
const clear = document.querySelector('.AC');
const del = document.querySelector('.DE');
const button = document.querySelectorAll('button');

const buttons = Array.from(button, elem => {
  elem.addEventListener('click', () => (display.value += elem.value));
});

equalSign.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
  display.value = eval(display.value);
});

clear.addEventListener('click', () => (display.value = ''));

del.addEventListener(
  'click',
  () => (display.value = display.value.slice(0, -1))
);
