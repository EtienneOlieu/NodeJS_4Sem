//possible beacuse of hoisting - lifts functions to higher level
console.log(random(1,10))

function random(min,max){
    return Math.floor((Math.random()*(max - min +1) -min))
}

//som anonym function
const randomAnonymousFunction = function random(min,max){
    return Math.floor((Math.random()*(max - min +1) -min))
}

//lave en ikke-kompakt anonym funktion her

//Oneliner also called lambda or arrowfunction
const randomCompactArrowFunction = (min,max) =>  Math.floor((Math.random()*(max - min +1) -min))
console.log(randomCompactArrowFunction(0,20))


//eksempel på callback function - function bliver brugt som argument
//Inversion of control
function genericACtionPerformer(genericAction, genericName) {


   return genericAction(genericName)
}

const subtract = (name) => `${name} is subtracting.`
const walk = (name) => `${name} is walking.`
const read = (name) => `${name} is reading War and Peace.`

//console.log "Tobias is subtracting"
console.log(genericACtionPerformer(subtract, "Tobias"))
console.log(genericACtionPerformer(walk, "Nicolas"))

//her er erklæres selve functionen i argumentet.
console.log(genericACtionPerformer((name) => `${name} is reading War and Peace`,'Andrea'))