const result = document.querySelector('.result')
const positivo = document.querySelector('.positivo')
const negativo = document.querySelector('.negativo')

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = { 

    ROCK: 'rock' ,
    PAPEL: 'paper' , 
    SCISSORS: 'scissors' 

}

const playHuman = (humanChoise) => {
    playTheGame(humanChoise, playMachine())
}


const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPEL, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

const playTheGame = (human, machine) => {

    console.log('humano:' + human + "maquina:" + machine)

    if (human === machine) {
        result.innerHTML = "Deu Empate!"


    }
    else if ((human === GAME_OPTIONS.PAPEL && machine === GAME_OPTIONS.ROCK) || (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPEL) || (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS)) {

        humanScoreNumber++
        positivo.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    }

    else {


        machineScoreNumber++
        negativo.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a Alexa"
    }

} 
