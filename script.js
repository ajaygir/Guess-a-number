'use strict'
//adding emojis--windowskey +. ---
//Variables
//remove form tag <form>

let input = document.querySelector('.input')
let submitbtn =document.querySelector('.button')
let result = document.querySelector('.result')
let restart = document.querySelector('.restart')

let guess = Math.floor (Math.random() * 10) +1

//This is game logic function
const checkgame = function(){
    // 1. Take value of input field
    let uservalue = Number(input.value)
//   console.log(uservalue)
console.log(guess)

    // 2. Check the value against my number
    // 3. If correct print congratulation
    // 4. If wrong print error message

    if ( uservalue === guess) {
        result.innerHTML = 'Congratulation 👏 !!'
    }else{
        result.innerHTML = 'Wrong, Try again 🙁!!'
    }
}

//Function for restart game

const restartgame = function(){
    input.value = ''
    result.innerHTML = 'Result'
    guess = Math.floor (Math.random() * 10) +1

}

//Register my event listener

submitbtn.addEventListener('click', checkgame)
restart.addEventListener('click', restartgame)



