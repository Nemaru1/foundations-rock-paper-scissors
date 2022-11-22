let compScore=0;
let userScore=0;
function getComputerChoice(){

  const randomNumber = Math.floor(Math.random() * (3));
  var options = ["rock", "paper", "scissors"];
  var computerSelection = options[randomNumber];
  return computerSelection;
};

function playRound(playerSelection, computerSelection){

  if(playerSelection === 'rock' && computerSelection === 'rock'){
    return 'You tied! You both picked rock'

  } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
    return 'You tied! You both picked scissors'

  } else if (playerSelection === 'paper' && computerSelection === 'paper'){
    return 'You tied! You both picked paper'

  } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    compScore++
    return 'You lost! Rock crushes scissors'

  } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    userScore++
    return 'You won! Scissors cuts paper'

  } else if (playerSelection === 'rock' && computerSelection === 'paper'){
    compScore++
    return 'You lost! Paper covers rock'

  } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    userScore++
    return 'You won! Rock crushes scissors'

  } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
    compScore++
    return 'You lost! Scissors cuts paper'

  } else if (playerSelection === 'paper' && computerSelection === 'rock'){
    userScore++
    return 'You won! Paper covers rock'
}
}

const computerSelection = getComputerChoice();


function game(){
for(let i = 0; i <5; i++){
  const playerSelection = prompt('Choose rock, paper or scissors');
  const computerSelection = getComputerChoice()
  console.log(playRound(playerSelection, computerSelection))
}

if(userScore > compScore){
  return 'You beat the computer! You are a genius'
} else if (userScore < compScore){
  return 'You can do better.'
} else {
  return 'You almost got it'
}
}

console.log(game());






