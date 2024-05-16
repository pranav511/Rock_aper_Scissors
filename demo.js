let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll('.choice')
let msg=document.getElementById('msg');
let compScorePara=document.querySelector('#comp-score')
let userScorePara=document.querySelector('#user-score')
// console.log(msg);

const drawGame = () => {
    //console.log('Draw game');
    msg.innerHTML='Game Draw Play Again!';
    msg.style.backgroundColor='#081b31'

}

const genCompChoice = () => {
    let options = ['paper', 'scissor', 'rock'];
    let randomChoice = Math.floor(Math.random() * 3);
    return options[randomChoice];
}

const showWinner=(userWin)=>{
    if(userWin){
        msg.innerText='You Win';
        msg.style.backgroundColor='green'
        userScore++;
        userScorePara.innerText=userScore;
    }
    else{
        msg.innerText='You Lose';
        msg.style.backgroundColor='red'
        compScore++;
        compScorePara.innerText=compScore;
    }
}

const playGame = (userChoice) => {
    //console.log('user', userChoice);
    let compChoice = genCompChoice();
    //console.log('comp', compChoice);
    if (userChoice == compChoice) {
        drawGame();
        
    }
    else{
        userWin=true;
        if(userChoice=='rock'){
            //scissor ,paper
            userWin=compChoice==='paper' ? false : true;
        }
        else if(userChoice=='paper'){
            //rock scissors
            userWin=compChoice==='scissor' ? false : true;
        }
        else{
            //rock,paper
            userWin=compChoice==='rock' ? false : true
        }
        showWinner(userWin);
    }
}



choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);


    })
})

