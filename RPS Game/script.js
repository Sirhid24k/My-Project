// const game = confirm('Would u like to play a game of Rock, Paper, Scissors');

const button = document.querySelector('.btn');
const result = document.querySelector('.result');
const computerScoreBoard = document.querySelector('.computer-score');
const playerScoreBoard = document.querySelector('.player-score');

let computerScore, playerScore;
computerScore = playerScore = 0;

button.addEventListener('click', playGame);

// Refactoring
// function resultComment(comment) {
//   return `<div>Computer: Player:<br>${comment}</div>`;
// }
// result.insertAdjacentHTML('beforeend', concave('Computer Wins!!! 🎉🎉'));

function playGame(e) {
  e.preventDefault();
  const inputText = document.querySelector('.input-text');

  const player = inputText.value;
  const randomNum = Math.floor(Math.random() * 3);
  const options = ['rock', 'scissors', 'paper'];
  const computer = options[randomNum];

  // resetting adjacentHTML
  result.innerHTML = '';

  // Conditions
  if (computer === 'paper' && player === 'rock') {
    result.insertAdjacentHTML(
      'beforeend',
      `<div>Computer: ${computer}, Player: ${player}<br>Computer Wins!!! 🎉🎉</div>`
    );
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  }
  if (computer === 'paper' && player === 'paper')
    result.insertAdjacentHTML(
      'beforeend',
      `<div>Computer: ${computer}, Player: ${player}<br>Its a draw</div>`
    );
  if (computer === 'paper' && player === 'scissors') {
    result.insertAdjacentHTML(
      'beforeend',
      `<div>Computer: ${computer}, Player: ${player}<br>Player Wins!!! 🎉🎉</div>`
    );
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  }

  ///////////////////////////////////////////////////////////
  if (computer === 'rock' && player === 'scissors') {
    result.insertAdjacentHTML(
      'beforeend',
      `<div>Computer: ${computer}, Player: ${player}<br>Computer Wins!!! 🎉🎉</div>`
    );
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  }
  if (computer === 'rock' && player === 'rock')
    result.insertAdjacentHTML(
      'beforeend',
      `<div>Computer: ${computer}, Player: ${player}<br>Its a draw</div>`
    );
  if (computer === 'rock' && player === 'paper') {
    result.insertAdjacentHTML(
      'beforeend',
      `<div>Computer: ${computer}, Player: ${player}<br>Player Wins!!! 🎉🎉</div>`
    );
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  }

  ///////////////////////////////////////////////////////////
  if (computer === 'scissors' && player === 'paper') {
    result.insertAdjacentHTML(
      'beforeend',
      `<div>Computer: ${computer}, Player: ${player}<br>Computer Wins!!! 🎉🎉</div>`
    );
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  }
  if (computer === 'scissors' && player === 'scissors')
    result.insertAdjacentHTML(
      'beforeend',
      `<div>Computer: ${computer}, Player: ${player}<br>Its a draw</div>`
    );
  if (computer === 'scissors' && player === 'rock') {
    result.insertAdjacentHTML(
      'beforeend',
      `<div>Computer: ${computer}, Player: ${player}<br>Player Wins!!! 🎉🎉</div>`
    );
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  }
  inputText.value = '';
}
