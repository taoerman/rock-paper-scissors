//randomly return "Rock", "Paper", "Scissors"
function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    const randomElement = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return randomElement;
}
//modify the first letter to upper letter
function firstToUpper(word) {
    word = word.toLowerCase();
    const firstLetter = word.slice(0, 1).toUpperCase();
    word = word.replace(word.slice(0, 1), firstLetter);
    return word;
}

//to get one round game result
function playRound(playerSelection, computerSelection) {
    playerSelection = firstToUpper(playerSelection);
    computerSelection = firstToUpper(computerSelection);
    
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win! Rock beats Scissors";
    }

    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock";
    }

    if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "You Even!";
    }

    if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "You Even!";
    }

    if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock";
    }

    if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper";
    }

    if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper";
    }

    if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "You Even!";
    }

    if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissorsr";
    }

}


// const str = "liuqi";
// // console.log(firstToUpper("liADi"));
// const playerSelection = prompt("input your action!")
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// function game() {
//     let yourScores = 0;
//     let computerScores = 0;

//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("input your action: ");
//         const computerSelection = getComputerChoice();
//         const result = playRound(playerSelection, computerSelection).slice(4, 5);
//         if (result == "W") {
//             yourScores += 1;
//             console.log("You Win this round!");
//             continue;
//         }
//         if (result == "L") {
//             computerScores += 1;
//             console.log("You Lose this round!")
//             continue;
//         }

//         if (result == "E") {
//             continue
//         }
//     }

//     if (yourScores > computerScores) {
//         return "You Win the game!!"
//     } 

//     if (yourScores < computerScores) {
//         return "You Lose this game!!"
//     }

//     return "You are Even at last!!"

// }


// console.log(game());

let humanScores = 0;
let computerScores = 0;

const container = document.querySelector('#container');
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
const humanP = document.querySelector('.humanscore');
const computerP = document.querySelector('.computerscore');

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";

rock.addEventListener('click', () => {
    const playerSelection = "rock";
    const result = playRound(playerSelection, getComputerChoice()).slice(4, 5);
    if (result == "W") {
        humanScores += 1;
        console.log("You Win this round!");
    }
    if (result == "L") {
        computerScores += 1;
        console.log("You Lose this round!")
    }

    humanP.textContent = humanScores;
    computerP.textContent = computerScores;
})

paper.addEventListener('click', () => {
    const playerSelection = "paper";
    const result = playRound(playerSelection, getComputerChoice()).slice(4, 5);
    if (result == "W") {
        humanScores += 1;
        console.log("You Win this round!");
    }
    if (result == "L") {
        computerScores += 1;
        console.log("You Lose this round!")
    }

    humanP.textContent = humanScores;
    computerP.textContent = computerScores;
    
})

scissors.addEventListener('click', () => {
    const playerSelection = "scissors";
    const result = playRound(playerSelection, getComputerChoice()).slice(4, 5);
    if (result == "W") {
        humanScores += 1;
        console.log("You Win this round!");
    }
    if (result == "L") {
        computerScores += 1;
        console.log("You Lose this round!")
    }

    humanP.textContent = humanScores;
    computerP.textContent = computerScores;
})

