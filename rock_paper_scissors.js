//Event listeners for round selection.
const buttons = document.querySelectorAll('button'); //selects nodelist of buttons 
   buttons.forEach((button) => {  //scrolls through node list
     button.addEventListener('click', (e) =>{
      let playerSelection = e.target.className;
      let computerSelection = computerPlay();
       console.log("playerSelection is "+e.target.className, "computerSelection is "+computerSelection);
       playRound();
       console.log(roundResult)
      });
    });



//Computer selects Rock, Paper, Scissors
    function computerPlay(){
      let computerHand=Math.floor(Math.random()*3);
      return (computerHand===0) ? 'Rock' : (computerHand===1) ? 'Paper' : 'Scissors';
    }

//Runs 5 matches and keeps score
//function game(roundNumber){
// for (i = 0; i < 5; i++){
//   let playerSelection = prompt('Rock, Paper, Scissors?');
//   let computerSelection = computerPlay();
//    playRound();
//    console.log(playRound(playerSelection, computerSelection))

// }
//}


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
let roundResult=playRound();


  