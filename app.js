let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
let resetBtn = document.querySelector("#reset-btn");


const genCompChoice = () =>{
    //rock,paper ,scissor
    const options = ["rock","paper","scissor"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{
    // console.log("Game was draw...!");
    msg.innerHTML = "Game was draw..!" 
    msg.style.background = "yellow";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        // console.log("you win...!");
        msg.innerHTML = `you win..! ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        // console.log("you lose...!");
        msg.innerHTML = `you loose..! ${compChoice} beats ${userChoice}`;
        msg.style.background = "red";
    }
}

const playGame =(userChoice) =>{
    console.log("user choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice =",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame()
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
};


choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice)
    });
});
