// let pushButton = document.querySelector(".rock-btn");
// let playerScore = document.querySelector(".player-point");

// //Event Listener
// //When rockbtn is pushed it adds one point to player

// function incrementButton() {
//   var element = document.getElementById("player-point");
//   var value = element.innerHTML;

//   ++value;
//   console.log(value);
//   document.getElementById("player-point").innerHTML = value;
// }

//Computer-ul alege un element random din array pentru a juca
const computerOptions = ["rock", "paper", "scissors"];

let computerOption;
let userOption;
let userScore = document.getElementById("player-point");
let userValue = 0;
let computerValue = 0;
let computerScore = document.getElementById("computer-point");

setImageComputer = () => {
  let imgComputer = document.getElementById("computer");
  if (computerOption === "paper") {
    imgComputer.src = "./img/paper.svg";
  } else if (computerOption === "scissors") {
    imgComputer.src = "./img/scissors.svg";
  } else {
    imgComputer.src = "./img/rock.svg";
  }

  console.log(computerOption);
};

setImageComputer();

//Set rockbtn, paperbtn, scissorsbtn to new variable
let newRock = document.getElementById("rock-id");
let newPaper = document.getElementById("paper-id");
let newScissors = document.getElementById("scissors-id");
let reloadBtn = document.getElementById("reloadBtn");

let imgUser = document.getElementById("player");

//Choosing button, changes image for user
newRock.onclick = () => {
  computerOption =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  setImageComputer();
  userOption = "rock";
  imgUser.src = "./img/rock.svg";
  compareGame(userOption, computerOption);
};

newPaper.onclick = () => {
  computerOption =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  setImageComputer();
  userOption = "paper";
  imgUser.src = "./img/paper.svg";
  compareGame(userOption, computerOption);
};

newScissors.onclick = () => {
  computerOption =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  setImageComputer();
  userOption = "scissors";
  imgUser.src = "./img/scissors.svg";
  compareGame(userOption, computerOption);
};

let text = document.getElementById("text");
compareGame = (userOption, computerOption) => {
  if (userOption === computerOption) {
    text.innerHTML = "It's a draw!";
    // ROCK
  } else if (userOption === "rock") {
    if (computerOption === "scissors") {
      text.innerHTML = "User wins a point!";
      userValue++;
    }
    if (computerOption === "paper") {
      text.innerHTML = "Computer wins a point!";
      computerValue++;
    }
    // PAPER
  } else if (userOption === "paper") {
    if (computerOption === "scissors") {
      text.innerHTML = "Computer wins a point!";
      computerValue++;
    }
    if (computerOption === "rock") {
      text.innerHTML = "User wins a point!";
      userValue++;
    }
    // SCISSORS
  } else if (userOption === "scissors") {
    if (computerOption === "paper") {
      text.innerHTML = "User wins a point!";
      userValue++;
    }
    if (computerOption === "rock") {
      text.innerHTML = "Computer wins a point!";
      computerValue++;
    }
  }
  userScore.innerHTML = userValue;
  computerScore.innerHTML = computerValue;
  //Compare user with computer to se which one gets to 5 points first
  if (userValue === 5 || computerValue === 5) {
    if (userValue > computerValue) {
      text.innerHTML = "User wins!";
    } else {
      text.innerHTML = "Computer wins!";
    }
    console.log("finish");
    newRock.style.display = "none";
    newPaper.style.display = "none";
    newScissors.style.display = "none";
    reloadBtn.style.display = "block";
  }
};

//This function refreshes the page
function refresh() {
  window.location.reload(true);
}
