let round = 1;
let roundTitle = document.querySelector("#round-title");

let info = document.querySelector(".info");

let playerCounter = 0;
let computerCounter = 0;

let playerSelection;

let playerSymbol;
let computerSymbol;

let playerBox = document.querySelector("#player-box");
let computerBox = document.querySelector("#computer-box");

let playerPara = document.querySelector("#player-para");
let computerPara = document.querySelector("#computer-para");

let playerScore = document.querySelector("#player-score")
let computerScore = document.querySelector("#computer-score");

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

function getComputerChoice() {
	let randomNum = Math.floor(Math.random()*3);
	switch(randomNum) {
		case 0:
			return "rock"
		case 1:
			return "paper"
		case 2:
			return "scissors"
	}
}

function playRound(playerSelection, computerSelection) {
	switch(playerSelection) {
		case "rock":
			playerSymbol = "✊";
			break
		
		case "paper":
			playerSymbol = "✋";
			break
		
		case "scissors":
			playerSymbol = "✌";
			break
	}

	switch(computerSelection) {
		case "rock":
			computerSymbol = "✊";
			break

		case "paper":
			computerSymbol = "✋";
			break
		
		case "scissors":
			computerSymbol = "✌";
			break
	}

	playerBox.textContent = playerSymbol;
	computerBox.textContent = computerSymbol;

	playerPara.textContent = playerSelection;
	computerPara.textContent = computerSelection;

	if (playerSelection == computerSelection) {
		
	}

	else if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "scissors" && computerSelection == "paper")
		) {

		playerCounter++;
	}

	else if (
		(computerSelection == "rock" && playerSelection == "scissors") ||
		(computerSelection == "paper" && playerSelection == "rock") ||
		(computerSelection == "scissors" && playerSelection == "paper")
		) {

		computerCounter++;
	}

	if (playerCounter >= 5 || computerCounter >=5) {
		if (playerCounter > computerCounter) {
			info.textContent = `Congratulations, you win the round ${round}!`;
		}

		else if (playerCounter < computerCounter) {
			info.textContent = `Computer wins the round ${round}`;
		}

		else {
			info.textContent = `The round ${round} was a tie`;
		}

		playerBox.textContent = "❔";
		computerBox.textContent = "❔";

		playerPara.textContent = "";
		computerPara.textContent = "";

		playerCounter = 0;
		computerCounter = 0;

		round += 1;
		roundTitle.textContent = `Round ${round}`;
	}

	playerScore.textContent = `Player: ${playerCounter}`;
	computerScore.textContent = `Computer: ${computerCounter}`;
}

function main() {
	rock.addEventListener("click", () => {
		playerSelection =  "rock";
		computerSelection = getComputerChoice();
		playRound(playerSelection, computerSelection);
	});

	paper.addEventListener("click", () => {
		playerSelection =  "paper";
		computerSelection = getComputerChoice();
		playRound(playerSelection, computerSelection);
	});

	scissors.addEventListener("click", () => {
		playerSelection =  "scissors";
		computerSelection = getComputerChoice();
		playRound(playerSelection, computerSelection);
	});
}

new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  freemode: {
  	enabled: true
  }
});