const userScoreTxt = document.getElementById("user-score");
const comScoreTxt = document.getElementById("com-score");
const Choices = document.querySelectorAll(".choice");
const Msg = document.getElementById("msg");

let userScore = 0;
let comScore = 0;

const generateComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    Msg.innerText = "Game was draw. Play again.";
    Msg.style.backgroundColor = "#0F1D35";
}

const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        userScore++;
        userScoreTxt.innerText = userScore;
        Msg.innerText = `You Win! Your ${userChoice} beats ${comChoice}`;
        Msg.style.backgroundColor = "#77AD5B";
    } else {
        comScore++;
        comScoreTxt.innerText = comScore;
        Msg.innerText = `You Loss! ${comChoice} beats Your ${userChoice}`;
        Msg.style.backgroundColor = "#C64845";
    }
}

const PlayGame = (userChoice) => {
    // Generate computer choice
    const comChoice = generateComChoice();

    if (userChoice === comChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            // scissors, paper
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = comChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
}

Choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        PlayGame(userChoice);
    });
});