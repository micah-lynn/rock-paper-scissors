// Declares global function - stored in variable "game".
const game = () => {
    let pScore = 0;
    let cScore = 0;
        

    // Prompt Player for Name
    const playerName = () => {
        const name = prompt("What is your name?");
        const noName = document.querySelector(".score-title-player");
        noName.textContent = name;
        return;
    };
    playerName();

    // Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".player-input button");
        //Computer Options
        const computerOptions = ["Rock", "Paper", "Scissors"];

        options.forEach((option)=>{
            option.addEventListener("click", function(){
                // Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // Call compare matches here
                compMatch(this.textContent, computerChoice);
            });
        });

    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score-text p");
        const computerScore = document.querySelector(".computer-score-area p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    // Compare Matches
    const compMatch = (computerChoice, playerChoice) => {
        // Update Text
        const winner = document.querySelector(".status");
        //Check for a tie
        if(playerChoice === computerChoice){
            winner.textContent = "It's a Tie!";
            return;
        }
        //Check for Rock
        if(playerChoice === "Rock"){
            if(computerChoice === "Scissors"){
                winner.textContent = "Player Wins!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for Paper
        if(playerChoice === "Paper"){
            if(computerChoice === "Rock"){
                winner.textContent = "Player Wins!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for Scissors
        if(playerChoice === "Scissors"){
            if(computerChoice === "Paper"){
                winner.textContent = "Player Wins!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
    }
    // Call all inner functions.
    playMatch();
};

// Start game function.
game();
