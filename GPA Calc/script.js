'use strict';
const calcBtn = document.querySelector('.calc-btn');
const addedSection = document.querySelector('.added-section');
const addButton = document.querySelector('.addButton');
const header = document.querySelector('header');

let gpa = 0;
let sumOfUnits = 0;
let finalGpa = 0;

calcBtn.addEventListener('click', () => {
  const input = document.querySelectorAll('.unit-points');
  const option = document.querySelectorAll('select');
  const result = document.querySelector('.result');
  const message = document.querySelector('.message');

  for (let i = 0; i < input.length && i < option.length; i++) {
    const inputs = Number(input[i].value);
    const options = Number(option[i].value);
    gpa += Number([inputs * options]);
    sumOfUnits += Number([inputs]);
  }
  finalGpa = (gpa / sumOfUnits).toFixed(2);

  message.classList.remove('hidden');
  result.textContent = finalGpa;

  gpa = 0;
  sumOfUnits = 0;
  finalGpa = 0;
});

addButton.addEventListener('click', () => {
  header.classList.remove('hidden');
  const section = document.createElement('section');
  section.classList.add('block');

  const input = document.createElement('input');
  input.type = 'text';
  input.classList.add('unit-points');

  const select = document.createElement('select');
  select.name = 'grade-points';
  select.classList.add('options');

  const optionA = document.createElement('option');
  optionA.value = '5';
  optionA.textContent = 'A';

  const optionB = document.createElement('option');
  optionB.value = '4';
  optionB.textContent = 'B';

  const optionC = document.createElement('option');
  optionC.value = '3';
  optionC.textContent = 'C';

  const optionD = document.createElement('option');
  optionD.value = '2';
  optionD.textContent = 'D';

  const optionE = document.createElement('option');
  optionE.value = '1';
  optionE.textContent = 'E';

  const optionF = document.createElement('option');
  optionF.value = '0';
  optionF.textContent = 'F';

  select.appendChild(optionA);
  select.appendChild(optionB);
  select.appendChild(optionC);
  select.appendChild(optionD);
  select.appendChild(optionE);
  select.appendChild(optionF);

  section.appendChild(input);
  section.appendChild(select);

  addedSection.appendChild(section);
});
