const count = document.querySelector('.count');
const entries = document.querySelector('.entries');
const incrementBtn = document.querySelector('.increment-btn');
const saveBtn = document.querySelector('.save-btn');

let numCount = 0;

incrementBtn.addEventListener('click', () => {
  numCount++;
  count.textContent = numCount;
});

saveBtn.addEventListener('click', () => {
  entries.textContent += `${numCount}-`;
  numCount = 0;
  count.textContent = 0;
});
