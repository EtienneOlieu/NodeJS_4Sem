// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
const subTotal1 = Number(numberOne) + Number(numberTwo)
console.log(subTotal1)

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const subTotal2 = (subTotal1 + Number(anotherNumberOne) + Number(anotherNumberTwo)).toFixed(2)
console.log(subTotal2)
console.log(typeof(subTotal2))


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const avgFiveDec = ((one+two+three)/3).toFixed(5)
console.log(Number(avgFiveDec))



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const charAtIndex2 = letters[letters.indexOf('c')]
console.log(charAtIndex2)


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!"

// capitalize the J in Javascript

const bigJ = fact.replace('j','J')
// --------------------------------------
console.log(bigJ)
