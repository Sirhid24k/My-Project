'use strict';
const formInput = document.querySelector('.form-input');
const formBtn = document.querySelector('.form-btn');
const toDoContainer = document.querySelector('.to-do-list');

// Load todos from local storage when the page loads/re-loads
loadTodosFromLocalStorage();

// Callback Functions
// Function to save to local storage
function saveTodosToLocalStorage() {
  const todos = Array.from(document.querySelectorAll('.to-do-item h4')).map(
    h4 => h4.textContent
  );
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to load todos from local storage
function loadTodosFromLocalStorage() {
  const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  storedTodos.forEach(todo => {
    addTodoToDOM(todo);
  });
}

// Function to add to-do to DOM
function addTodoToDOM(inputValue) {
  const html = `
    <div class="to-do-item">
      <h4>${inputValue}</h4>
      <div class="list-icons">
        <span class="list-icon delete-icon">
          <i class="fa-solid fa-trash"></i>
        </span>
        <span class="list-icon check-icon">
          <i class="fa-solid fa-check"></i>
        </span>
      </div>
    </div>`;
  toDoContainer.insertAdjacentHTML('beforeend', html);
}

// EventListeners
formBtn.addEventListener('click', e => {
  e.preventDefault();
  if (formInput.value !== '') {
    const inputValue = formInput.value;
    addTodoToDOM(inputValue);
    saveTodosToLocalStorage();
    formInput.value = '';
  }
});

toDoContainer.addEventListener('click', e => {
  if (
    e.target.classList.contains('check-icon') ||
    e.target.classList.contains('fa-check')
  ) {
    e.target.closest('.to-do-item').classList.toggle('toggle');
    saveTodosToLocalStorage();
  }
  if (
    e.target.classList.contains('delete-icon') ||
    e.target.classList.contains('fa-trash')
  ) {
    e.target.closest('.to-do-item').classList.add('delete');
    setTimeout(() => {
      e.target.closest('.to-do-item').remove();
      saveTodosToLocalStorage();
    }, 1000);
  }
});
