

//function for choices 
function startGame() {
    //player choices 
    const choices = ["rock","paper","scissors"]
    //  pc choicess
    computerChoice = choices[Math.floor(Math.random() * 3 )]
    
    return {
        playerChoice: choices[0]
        ,computerChoice: computerChoice
    }
}


// makes player and computer choice excuteables 
const playerChoice = gameChoices.playerChoice;
const computerChoice = gameChoices.computerChoice;

//result is determening who wins the game based on a string

const result = " "

// if statement that handles the result of a game 

if (playerChoice === computerChoice) {
    const result = 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
  } else {
    result = 'You lose!';
  }
  // inner html stuff that  may delete later
//   document.getElementById('result').innerHTML = 'You chose ' + playerChoice +
//         '. Computer chose ' + computerChoice + '. ' + result;

    
        //

        const rockButton = document.getElementById("Rock")

      
        
  
  

    
    