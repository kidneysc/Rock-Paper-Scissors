//Event listeners for round selection.
let playerSelection = 'null';
let computerSelection = 'null';



const buttons = document.querySelectorAll('button'); //selects nodelist of buttons 
   buttons.forEach((button) => {  //scrolls through node list
     button.addEventListener('click', (e) =>{
      let playerSelection = e.target.className;
      let computerSelection = computerPlay();
      let roundResult = playRound(playerSelection, computerSelection);

       //Creates divs with Lates round outcomes and scores
       const container = document.querySelector("#Score");
       const outcome = document.createElement('div');
       outcome.classList.add('outcome');
       outcome.textContent = roundResult;
       const player = document.createElement('div');
       player.classList.add('player');
       player.textContent = "The Puny Humans Score :  " + playerScore;
       const computer= document.createElement('div');
       computer.classList.add('computer');
       computer.textContent = "The Divine Machines Score: " + computerScore;
       
       //Empties divs and updates score with latest results and total Scores.
       container.innerHTML = '';
       container.appendChild(outcome);
       container.appendChild(player);
       container.appendChild(computer);

       //Displays winner after 
       if(playerScore == 5 & computerScore < 5 ){
           const winnerHuman =document.createElement('div');
           winnerHuman.classList.add('winner');
           winnerHuman.textContent= alert("YOU HAVE BEATEN THE MACHINE: NOW LAY DOWN YOUR HAMMER AND DIE, JOHN HENRY.");
           container.appendChild(winnerHuman);
       } else {if(computerScore == 5 & playerScore < 5 ){
        const winnerComp =document.createElement('div');
        winnerComp.classList.add('winner');
        winnerComp.textContent= alert("THE MACHINE HAS BEATEN YOU. WALLOW IN SELF PITY AND DESPAIR.");
        container.appendChild(winnerComp);         
       }}  
      });
    });



//Computer selects Rock, Paper, Scissors
    function computerPlay(){
      let computerHand=Math.floor(Math.random()*3);
      return (computerHand===0) ? 'Rock' : (computerHand===1) ? 'Paper' : 'Scissors';
    }


//Play a single round
function playRound(playerSelection, computerSelection) {
  if(playerSelection===computerSelection){
    return 'Yall picked the same stuff. Its a Tie!'
  }
  else{
    if(playerSelection=='Rock'){
      if(computerSelection=='Scissors'){
        playerScore++;
        return 'You win, Rock beats Scissors!' }
        else {
          computerScore++;
          return 'Your rock got wrapped up in Paper! You Lose!'}

      }
  else {
    if(playerSelection=='Scissors'){
      if(computerSelection=='Paper'){
        playerScore++;
        return 'You really cut up that paper! You Win!'}
        else {
          computerScore++;
          return 'Your Scissors got smashed to smitherens by a Rock. You Lose!'}

      }
  else {
    if(playerSelection=='Paper'){
      if(computerSelection=='Rock'){
        playerScore++;
        return 'Against all logic, paper is victorious against rock! You Win!'}
        else {
          computerScore++;
          return 'Paper really should always be the loser. You Lose!'}

      }
    }
    }
  }
}
 

let i=0;
let playerScore=0;
let computerScore=0;



  