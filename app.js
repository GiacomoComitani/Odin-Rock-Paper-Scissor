const cardsContainer = document.querySelector('.cards');

cardsContainer.addEventListener('click', handleClick);

let playerScore = 0;
let computerScore = 0;
const history = [];

function handleClick(event) {

    if (playerScore === 5 || computerScore === 5 ) {
        return;
    }

  const clickedElement = event.target;
  if (clickedElement.tagName === 'IMG') {
    const card = clickedElement.closest('.card');
    const player = card.dataset.value;
    const computer = generateComputer();

    history.push({player,computer});

    if (player === computer) {
      // pareggio
    } else if (
      (player === 'rock' && computer === 'paper') ||
      (player === 'scissor' && computer === 'scissor') ||
      (player === 'scissor' && computer === 'rock')
    ) {
      // computer win
      computerScore++;
    } else {
      // player win
      playerScore++;
      
    }
    updateComment(player, computer);
    updateScore();
    updateMoves(history);

    if (playerScore === 5 || computerScore === 5 ) {
        endComment(playerScore,computerScore);
        const button = document.getElementById('button');
        button.style.display = 'block';
        return;
    }
  }
}

function updateMoves(history) {
  const moves = document.querySelector('.moves pre');
  let movesText = '';

  for (let i = 0; i < history.length; i++) {
    const move = history[i];
    movesText += `Player: ${move.player} - Computer: ${move.computer}\n`;
  }
  moves.textContent = movesText;
}


function updateScore() {
  const scoreElement = document.querySelector('.score');
  scoreElement.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function generateComputer() {
  const choices = ['rock', 'paper', 'scissor'];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function endComment(playerScore, computerScore){
    const comm = document.querySelector('.comment p')

    if (playerScore > computerScore) {
        comm.textContent = 'Congratulations! you won!'
    }else{
        comm.textContent = 'You lost the game! :('
    }
}

function updateComment(player,computer){

    const comm = document.querySelector('.comment p')

    if ((player === 'rock' && computer === 'paper')||(computer === 'paper' && player === 'rock')) {
        comm.textContent = 'Paper beats Rock!'
    }else if ((player === 'rock' && computer === 'rock') || (player === 'paper' && computer === 'paper')||(player === 'scissor' && computer === 'scissor')){
        comm.textContent = 'It\'s a tie!'
    }else if (player === 'rock' && computer === 'scissor'){
        comm.textContent = 'Rock beats scissor!'
    }else if ((player === 'scissor' && computer === 'paper')||(player === 'paper' && computer === 'scissor')){
        comm.textContent = 'Scissor beats paper!'
    }else if ((player === 'scissor' && computer === rock) || computer === 'scissor' && player === 'rock'){
        comm.textContent = 'Rock beats scissor'
    }
}

button.addEventListener('click', function() {
    location.reload();
  });
