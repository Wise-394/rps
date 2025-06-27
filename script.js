const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
const computerScoreLabel = document.querySelector("#computer-score")
const humanScoreLabel = document.querySelector("#human-score")
const winner = document.querySelector("#winner")
const playAgainBtn = document.querySelector("#play-again")
const ul = document.querySelector("ul")
const footer = document.querySelector(".footer")

const p = document.createElement("p")


rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()))
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()))
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()))

let humanScore = 0
let computerScore = 0

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


function playRound(humanChoice, computerChoice) {
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
    footer.appendChild(p)
}
function anounceWinner(winnerStr) {
    winner.textContent = winnerStr
    playAgainBtn.style.display = "block"
}

function playAgain() {
    humanScore = 0
    computerScore = 0
    computerScoreLabel.textContent = ""
    humanScoreLabel.textContent = ""
    winner.textContent = ""
    playAgainBtn.style.display = "none"
    p.textContent = ""
}

playAgainBtn.addEventListener("click", ()=> playAgain())
