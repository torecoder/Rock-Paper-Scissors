const game = () => {
  let pScore = 0;
  let cScore = 0;
  let roundNumber = 1;

  //start the game
  const starGame = () => {
    const playBtn = document.querySelector(".intro button");
    const score = document.querySelector(".score");
    const match = document.querySelector(".match");
    const introScreen = document.querySelector(".intro");
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      score.classList.add("fadeIn");
      match.classList.add("fadeIn");
    });
  };

  //play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //computer options
    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        //wait winner
        const winner = document.querySelector(".winner");
        winner.textContent = "...";
        setTimeout(() => {
          //here is where we call compareHands
          compareHands(this.textContent, computerChoice);
          //update images
          playerHand.src = `./images/${this.textContent}.png`;
          computerHand.src = `./images/${computerChoice}.png`;
        }, 2000);
        //round update
        const roundMatch = document.querySelector(".round span");
        roundMatch.textContent = roundNumber;
        // hands animations
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //update text
    const winner = document.querySelector(".winner");
    const round = document.querySelector(".round");
    //checking for a tie
    if (playerChoice == computerChoice) {
      winner.textContent = "It is a tie";
      roundNumber++;
      return;
    }
    //checking for a rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player win";
        roundNumber++;
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = `Computer win`;
        roundNumber++;
        cScore++;
        updateScore();
        return;
      }
    }
    //checking for a paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = `Computer win`;
        roundNumber++;
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = `Player win`;
        roundNumber++;
        pScore++;
        updateScore();
        return;
      }
    }
    //checking for a scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = `Computer win`;
        roundNumber++;
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = `Player win`;
        roundNumber++;
        pScore++;
        updateScore();
        return;
      }
    }
  };
  //here call all the inners fuctions
  starGame();
  playMatch();
};
//start the game function
game();
