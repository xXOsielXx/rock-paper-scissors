alert("Rock Paper Scissors");

let playerScore = 0;
let computerScore = 0;

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

function getPlayerSelection() {
	while (true) {
		let playerSelection =  prompt("Choose: Rock Paper Scissors").toLowerCase();
		
		if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
			return playerSelection
		}
		else {
			true
		}
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		return "Tie"
	}

	else if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "scissors" && computerSelection == "paper")
		) {

		playerScore++;

		return "Player win!";
	}

	else if (
		(computerSelection == "rock" && playerSelection == "scissors") ||
		(computerSelection == "paper" && playerSelection == "rock") ||
		(computerSelection == "scissors" && playerSelection == "paper")
		) {

		computerScore++;

		return "Computer win!";
	}
}

function main() {
	let counter = 1;
	while (counter <= 5) {
		computerChoice = getComputerChoice();
		console.log(computerChoice);

		playerSelection = getPlayerSelection();
		console.log(playerSelection);

		alert(playRound(playerSelection, computerChoice));

		counter++;
	}
}


main();

alert("Player " + playerScore + " - " + computerScore + " Computer");

if (playerScore > computerScore) {
	alert("Congrats, you win this round!");
}

else if (playerScore < computerScore) {
	alert("The computer win this round");
}

else {
	alert("This round was a tie");
}