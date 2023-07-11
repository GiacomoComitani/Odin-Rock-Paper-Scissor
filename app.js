const cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.length; i++ ){
    cards[i].addEventListener('click', handleClick);
}

let playerScore = 0;
let computerScore = 0;

function handleClick(event) {
  const player = event.target.querySelector('p').textContent;
  const computer = generateComputer();

  if (player === computer) {
    // pareggio 
  }else if (
    (player === 'sasso' && computer === 'carta') ||
    (player === 'carta' && computer === 'forbice')||
    (player === 'forbice' && computer === 'sasso')
  ){
    //computer win
    computerScore++;
  }else{
    // player win
    playerScore++;
  }

  updateScore();
  updateMoves();
}

function updateMoves(){
    const moves = document.querySelector('.moves');
    moves.textContent = `Player: ${player} - Computer: ${computer}`;
}

function updateScore(){
    const scoreElement = document.querySelector('.score');
    scoreElement.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function generateComputer(){
    const choices = ['sasso', 'carta', 'forbice'];
    const index = Math.floor(Math.random()* choices.lenght);
    return choices[index];
}
