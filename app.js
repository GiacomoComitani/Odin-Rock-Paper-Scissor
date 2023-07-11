const cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.length; i++ ){
    cards[i].addEventListener('click', handleClick);
}

let playerScore;
let computerScore;

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
}