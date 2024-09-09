'use strict';

// Selectors
const voteOptions = Array.from(document.querySelectorAll('.vote-option'));
const submitBtn = document.querySelector('.submit-btn');
const resultBtn = document.querySelector('.result-btn');
const hideBtn = document.querySelector('.hide-btn');
const voteMessage = document.querySelector('.vote-message');
const formInput = document.querySelector('.form-input');

// Starter Variables
const resultPassword = 54321;
let voteCountArray = [
  {
    candidateName: 'ojetola',
    votes: 0,
  },
  {
    candidateName: 'ezugwu',
    votes: 0,
  },
  {
    candidateName: 'abubakar',
    votes: 0,
  },
  {
    candidateName: 'shuaib',
    votes: 0,
  },
  {
    candidateName: 'muhammad',
    votes: 0,
  },
  {
    candidateName: 'onakpa-Ere',
    votes: 0,
  },
  {
    candidateName: 'oluwakayode',
    votes: 0,
  },
  {
    candidateName: 'aaron',
    votes: 0,
  },
  {
    candidateName: 'solomon',
    votes: 0,
  },
  {
    candidateName: 'siraj',
    votes: 0,
  },
  {
    candidateName: 'gracious',
    votes: 0,
  },
  {
    candidateName: 'ogbalajobi',
    votes: 0,
  },
  {
    candidateName: 'shuaibu',
    votes: 0,
  },
  {
    candidateName: 'anyaegbu',
    votes: 0,
  },
  {
    candidateName: 'olorunsola',
    votes: 0,
  },
];

// Getting data from local storage
const userVotes = localStorage.getItem('votes');
const uservotesJSON = JSON.parse(userVotes) || voteCountArray;

function setCandidateVotes(candidate, votes) {
  document.getElementById(candidate).textContent = votes;
}

// Displaying saved votes
function displayVotes(array) {
  array.forEach(vote => setCandidateVotes(vote.candidateName, vote.votes));
}
displayVotes(uservotesJSON);

// EventListeners
submitBtn.addEventListener('click', () => {
  voteCountArray = uservotesJSON;
  function updateVotes(voteOption) {
    voteCountArray.forEach(voteCount => {
      if (voteCount.candidateName === voteOption) {
        voteCount.votes++;
      }
    });
  }

  const voteOptionsArray = voteOptions.map(elem => elem.value);
  voteOptionsArray.forEach(updateVotes);

  // Displaying submitted votes
  displayVotes(voteCountArray);

  // Saving data to local storage
  const saveVotesJSON = JSON.stringify(voteCountArray);
  localStorage.setItem('votes', saveVotesJSON);

  setTimeout(() => {
    voteMessage.classList.remove('hidden');
  }, 500);
  setTimeout(() => {
    voteMessage.classList.add('hidden');
  }, 2500);
});

resultBtn.addEventListener('click', e => {
  e.preventDefault();
  if (!formInput.value || Number(formInput.value) !== resultPassword) return;
  if (Number(formInput.value) === resultPassword)
    document.querySelector('.result-section').style.transform = 'translateX(0)';
  formInput.value = '';
});

hideBtn.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('.result-section').style.transform =
    'translateX(-100%)';
});
