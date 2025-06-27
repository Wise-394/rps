function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    switch (randomInt) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
        default:
            return "error"
    }
}

function getHumanChoice() {
    return prompt("Rock Paper Scissors?").toLowerCase()
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("TIE!")
        }

        else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                console.log("You win! Rock beats Scissors")
                humanScore++
            } else {
                console.log("You lose! Rock cant beat paper")
                computerScore++
            }
        }

        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win! Paper beats rock")
                humanScore++
            } else {
                console.log("You lose! Paper cant beat scissor")
                computerScore++
            }
        }

        else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                console.log("You win! Scissors beats paper")
                humanScore++
            } else {
                console.log("You lose! Scissor cant beat rock")
                computerScore++
            }
        }
    }

    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection,computerSelection)
    }
    if(humanScore === computerScore){
        console.log("Tie!")
    } else if (humanScore > computerScore) {
        console.log("You win!")
    } else {
        console.log("You lose!")
    }
}
playGame()
