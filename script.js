'use strict';

const message = document.querySelector('.message');
const scoreLabel = document.querySelector('.score');
const highscoreLabel = document.querySelector('.label-highscore');
const numberLabel = document.querySelector('.number');
const bodyLabel = document.querySelector('body');
let score = 20;
let highscore = 0;
let secretNumber = Number((Math.random() * 20 + 1).toFixed());
console.log(typeof secretNumber, secretNumber);

const handleWin = () => {
  message.textContent = '🎉 You Won!';
  if (highscore < score) {
    highscore = score;
  }
  highscoreLabel.textContent = '🥇 Highscore: ' + highscore;
  numberLabel.textContent = secretNumber;
  numberLabel.style.width = '30rem';
  bodyLabel.style.backgroundColor = '#60b347';
};

const handleLosing = () => {
  message.textContent = '💥 You lost the game!';
  numberLabel.textContent = secretNumber;
  score = 0;
};

const handleAgain = () => {
  message.textContent = 'Start guessing...';
  numberLabel.textContent = '?';
  score = 20;
  scoreLabel.textContent = '20';
  document.querySelector('.guess').value = null;
  secretNumber = Number((Math.random() * 20 + 1).toFixed());
  numberLabel.style.width = '15rem';
  bodyLabel.style.backgroundColor = '#222';
};

const handleBigger = () => {
  if (score > 1) {
    message.textContent = '📈 Too Big';
    score--;
  } else {
    handleLosing();
  }
};

const handleLower = () => {
  if (score > 1) {
    message.textContent = '📉 Too low';
    score--;
  } else {
    handleLosing();
  }
};

const handleClick = () => {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = '😢 No Number!';
  } else {
    if (guess === secretNumber) {
      handleWin();
    } else if (guess > secretNumber) {
      handleBigger();
    } else if (guess < secretNumber) {
      handleLower();
    }
  }

  scoreLabel.textContent = score;
};

document.querySelector('.check').addEventListener('click', handleClick);
document.querySelector('.again').addEventListener('click', handleAgain);
