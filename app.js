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
      (player === 'sasso' && computer === 'carta') ||
      (player === 'carta' && computer === 'forbice') ||
      (player === 'forbice' && computer === 'sasso')
    ) {
      // computer win
      computerScore++;
    } else {
      // player win
      playerScore++;
    }
    updateScore();
    updateMoves(history);
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
  const choices = ['sasso', 'carta', 'forbice'];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
