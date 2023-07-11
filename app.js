const cardsContainer = document.querySelector('.cards');

cardsContainer.addEventListener('click', handleClick);

let playerScore = 0;
let computerScore = 0;

function handleClick(event) {
  const clickedElement = event.target;
  if (clickedElement.tagName === 'IMG') {
    const card = clickedElement.closest('.card');
    const player = card.dataset.value;
    const computer = generateComputer();

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
    updateMoves(player,computer);
  }
}

function updateMoves(player,computer) {
  const moves = document.querySelector('.moves');
  moves.textContent = `Player: ${player} - Computer: ${computer}`;
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
