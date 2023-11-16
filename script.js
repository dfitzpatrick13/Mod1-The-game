

//function for choices 
function startGame() {
    //player choices 
    const choices = ["rock","paper","scissors"]
    //  pc choicess
    let computerChoice = choices[Math.floor(Math.random() * 3 )]
    
    return {
        playerChoice: choices[0]
        ,computerChoice: computerChoice
    }
}

// setting the score board to 0 so i can ittrate up depending who wins 
let playerScore = 0
let computerScore = 0 

// makes player and computer choice excuteables 
const playerChoice = startGame.playerChoice;
const computerChoice = startGame.computerChoice;

//result is determening who wins the game based on a string
function updateResults(playerChoice,computerChoice){

  let result = " "
  //update images based on button press 
  const playerImage = document.getElementById('player-image');
  if (playerChoice === 'rock') {
    playerImage.src = 'rock.png';
  } else if (playerChoice === 'paper') {
    playerImage.src = 'paper.png';
  } else if (playerChoice === 'scissors') {
    playerImage.src = 'sisscors.png';
  }
//update images based on button press  for computer 
  const computerImage = document.getElementById('computer-image');
  if (computerChoice === 'rock') {
    computerImage.src = 'rock.png';
  } else if (computerChoice === 'paper') {
    computerImage.src = 'paper.png';
  } else if (computerChoice === 'scissors') {
    computerImage.src = 'sisscors.png';
  }

  // if statement that handles the result of a game 
  if (playerChoice === computerChoice) {
       result = 'It\'s a tie!';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = 'You win!';
      playerScore++
    } else {
      result = 'You lose!';
      computerScore++
    }
     // display results and the score
     document.getElementById("player-score").textContent = "Player:" + playerChoice;
     document.getElementById("computer-score").textContent = "Computer:" + computerChoice;
     document.getElementById('result').textContent = result;
     document.getElementById("player-score").textContent = "Player:" + playerChoice;
     document.getElementById("computer-score").textContent = "Computer:" + computerChoice;
    
     console.log(result);

}
       
        //event listener for rockbutton
        const rockButton = document.getElementById("Rock")
        rockButton.addEventListener("click", function () {
          const playerChoice = "rock"
          console.log("rock");
          const gameChoices = startGame(); 
          // Generate a new computer choice
         const computerChoice = gameChoices.computerChoice; 
         updateResults(playerChoice, computerChoice);
          
        })

            // Event listener  for paper button
      const paperButton = document.getElementById("Paper");
      paperButton.addEventListener("click", function () {
          const playerChoice = "paper";
          console.log("Paper");
          const gameChoices = startGame();
          const computerChoice = gameChoices.computerChoice;
          updateResults(playerChoice, computerChoice);
      });

      // Event listener for scissors button 
      const scissorsButton = document.getElementById("Scissors");
      scissorsButton.addEventListener("click", function () {
          const playerChoice = "scissors";
          console.log("Scissors");
          const gameChoices = startGame();
          const computerChoice = gameChoices.computerChoice;
          updateResults(playerChoice, computerChoice);
      });

      // Event listener for random button 
      const randomButton = document.getElementById("random");
      randomButton.addEventListener("click", function () {
          const choices = ["rock", "paper", "scissors"];
          const playerChoice = choices[Math.floor(Math.random() * 3)];
          console.log("Random choice: " + playerChoice);
          const gameChoices = startGame();
          const computerChoice = gameChoices.computerChoice;
          updateResults(playerChoice, computerChoice);
      });
          
  
     

