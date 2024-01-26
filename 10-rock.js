let score = JSON.parse(localStorage.getItem('score')) ||{
  wins : 0,
  losses: 0,
  ties : 0,
  };
  document.querySelector('.js-score').innerHTML = `Wins:${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`

  function playGame(playerMove){
  const computerMove = pickComputerMove();

  let result = '';

  if(playerMove === 'scissors'){
  if(computerMove === 'rock'){
  result = 'you lose';
  }
  else if(computerMove === 'paper'){
  result = 'you win';
  }
  else if(computerMove === 'scissors'){
  result = 'tie';
  }
  }
  if(playerMove === 'paper'){
  if(computerMove === 'rock'){
  result = 'you win';
  }
  else if(computerMove === 'paper'){
  result = 'tie';
  }
  else if(computerMove === 'scissors'){
  result = 'you lose';
  }
  }
  if(playerMove === 'rock'){
  if(computerMove === 'rock'){
  result = 'tie';
  }
  else if(computerMove === 'paper'){
  result = 'you lose';
  }
  else if(computerMove === 'scissors'){
  result = 'you win';
  }
  }

  if(result === 'you win'){
  score.wins += 1;
  }else if(result === 'you lose'){
  score.losses +=1;
  }else if(result === 'tie'){
  score.ties += 1;
  }

  localStorage.setItem('score',JSON.stringify(score));

  document.querySelector('.js-score').innerHTML = `Wins:${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;       

  document.querySelector('.result').innerHTML = result; 

  document.querySelector('.move').innerHTML =  
  `you 
  <img src="${playerMove}-emoji.png" class="rock">
  <img src="${computerMove}-emoji.png" class="rock">
  computer` }
  
  function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';
  if(randomNumber >= 0 && randomNumber <1/3){
  computerMove = 'rock';
  }
  else if (randomNumber>=1/3 && randomNumber<2/3){
  computerMove = 'paper';
  } 
  else if(randomNumber>=2/3 && randomNumber<1){
    computerMove = 'scissors';
  }
  return computerMove;
  }