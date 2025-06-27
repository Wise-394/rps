const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
const computerScoreLabel = document.querySelector("#computer-score")
const humanScoreLabel = document.querySelector("#human-score")
const winner = document.querySelector("#winner")
const playAgainBtn = document.querySelector("#play-again")
const ul = document.querySelector("ul")
const footer = document.querySelector(".footer")
const humanChoiceLogo = document.querySelector("#human-choice-logo")
const computerChoiceLogo = document.querySelector("#computer-choice-logo")
const p = document.querySelector("#log")


rockButton.addEventListener("click", () => playRound(getHumanChoice("rock"), getComputerChoice()))
paperButton.addEventListener("click", () => playRound(getHumanChoice("paper"), getComputerChoice()))
scissorsButton.addEventListener("click", () => playRound(getHumanChoice("scissors"), getComputerChoice()))

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    let choice = ""
    switch (randomInt) {
        case 0:
            choice = "rock"
            computerChoiceLogo.textContent = "✊"
            break
        case 1:
            choice = "paper"
            computerChoiceLogo.textContent = "✋"
            break
        case 2:
            choice = "scissors"
            computerChoiceLogo.textContent = "✌️"
            break
        default:
            return "error"
    }
    return choice
}

function getHumanChoice(choice) {
    switch(choice){
        case "rock":
            humanChoiceLogo.textContent = "✊"
            break
        case "paper":
            humanChoiceLogo.textContent = "✋"
            break
        case "scissors":
            humanChoiceLogo.textContent = "✌️"
            break
    }
    return choice
}


function playRound(humanChoice, computerChoice) {
    if (computerScore >= 5 || humanScore >= 5) return

    if (humanChoice === computerChoice) {
        logRound("Its a tie!")
    }

    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            logRound("You win! Rock beats Scissors")
            humanScore++
        } else {
            logRound("You lose! Rock cant beat paper")
            computerScore++
        }
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            logRound("You win! Paper beats rock")
            humanScore++
        } else {
            logRound("You lose! Paper cant beat scissor")
            computerScore++
        }
    }

    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            logRound("You win! Scissors beats paper")
            humanScore++
        } else {
            logRound("You lose! Scissor cant beat rock")
            computerScore++
        }
    }
    changeScoreLabel()
    if (computerScore >= 5 || humanScore >= 5) {
        anounceWinner(humanScore >= 5 ? "You are the winner" : "You lose")
        return
    }
}
function changeScoreLabel() {
    computerScoreLabel.textContent = computerScore
    humanScoreLabel.textContent = humanScore
}
function logRound(resultStr) {
    p.textContent = resultStr
}
function anounceWinner(winnerStr) {
    winner.textContent = winnerStr
    playAgainBtn.style.visibility = "visible"
}

function playAgain() {
    humanScore = 0
    computerScore = 0
    computerScoreLabel.textContent = "0"
    humanScoreLabel.textContent = "0"
    winner.textContent = ""
    playAgainBtn.style.visibility = "hidden"
    p.textContent = ""
}

playAgainBtn.addEventListener("click", () => playAgain())
