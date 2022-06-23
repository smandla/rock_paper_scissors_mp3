
var choices = ['R', 'P', 'S']

var random = () => Math.floor(Math.random() * 3)

function Check(playerChoice) {
    if (playerChoice !== 'R' && playerChoice !== 'P' && playerChoice !== 'S') {
        alert('You messed up, try again')
        playerChoicePrompt()
    }
    else { let newPrompt = prompt('test') }
}

function playerChoicePrompt() {
    var playerChoice = prompt("Enter R for  Rock, P for  Paper or S for Scissor");
    Check(playerChoice)
    return playerChoice

}

function PlayGame() {
    var playerChoice = playerChoicePrompt()

    var CPUChoice = choices[random()];
    console.log(CPUChoice)
    // Check(playerChoice)
    console.log(playerChoice)

}




PlayGame()
// var button = document.getElementById('button')
// button.addEventListener('click', function () {
//     random();
//     var cpuChoice = Choices[random()]

// })