function getComputerChoice()
{
    let cChoice = "";
    let cNum = Math.floor(Math.random() * 3); 
    
    if (cNum === 0) {
        cChoice = "rock";
    } else if (cNum === 1) {
        cChoice = "paper";
    } else {
        cChoice = "scissors";
    }
    
    return cChoice;
}

function getHumanChoice()
{
    let hChoice=prompt("Choose - (1) Rock / (2) Paper / (3) Scissors")
    return hChoice.toLowerCase();
}

function playGame()
{
    function playRound(humanChoice,computerChoice)
    {
        if(humanChoice === computerChoice)
            {
                console.log("It's a tie!")
            }

        if(humanChoice === "rock")
            {
                if(computerChoice === "scissors")
                    {
                        console.log("You win! ${humanChoice} beats ${computerChoice}")
                        humanScore+=1;
                    }
                if(computerChoice === "paper")
                    {
                        console.log("You lose! ${computerChoice} beats ${humanChoice}")
                    }
            }
        
        if(humanChoice === "paper")
            {
                if(computerChoice === "rock")
                    {
                        console.log("You win! ${humanChoice} beats ${computerChoice}")
                        humanScore+=1;
                    }
                if(computerChoice === "scissors")
                    {
                        console.log("You lose! ${computerChoice} beats ${humanChoice}")
                        computerScore+=1;
                    }
            }
            
        if(humanChoice === "scissors")
            {
                if(computerChoice === "paper")
                    {
                        console.log("You win! ${humanChoice} beats ${computerChoice}")
                        humanScore+=1;
                    }
                if(computerChoice === "rock")
                    {
                        console.log("You lose! ${computerChoice} beats ${humanChoice}")
                        computerScore+=1;
                    }
            }
    }
    let humanScore=0;
    let computerScore=0;

    



}


