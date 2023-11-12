const day = document.querySelector('.day');
const time = document.querySelector('.time');

const runClock = () => {
  const present = new Date();
  const options = {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
    year: 'numeric',
  };
  day.textContent = new Intl.DateTimeFormat('en-GB', options).format(present);

  time.textContent = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: 'numeric',
    second: 'numeric',
  }).format(present);
};

runClock();
setInterval(runClock, 1000);
