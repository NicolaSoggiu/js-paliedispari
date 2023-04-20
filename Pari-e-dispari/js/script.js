// ASK EVEN OR ODD
let choise = prompt("Choose Even or Odd");
console.log("Your choise is:", choise);

// CHOOSE A NUMBER
let userNumber = parseInt(prompt("Choose a number from 1 to 5"));
console.log("The user number is:", userNumber);

// GENERATE A RANDOM PC NUMBER
const computerNumber = calcNumber(1, 5);
console.log("The computer number is:", computerNumber);

// SUM NUMBERS
let sumNumbers = calcSum(userNumber, computerNumber);
console.log("The sum numbers is:", sumNumbers);

// DETERMINE EVEN OR ODD
let result = 0;
if (isEven(sumNumbers)) {
  result = "Even";
  console.log("The result is Even");
} else {
  result = "Odd";
  console.log("The result is Odd");
}

// FINAL RESULT
if (choise == result) {
  console.log("Congratulation, you are the winner!");
} else {
  console.log("I'm sorry, you lost!");
}

// FUNCTION RANDOM NUMBER
function calcNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// FUNCTION SUM
function calcSum(sum1, sum2) {
  return parseInt(sum1) + parseInt(sum2);
}

// FUNCTION EVEN ODD
function isEven(num) {
  return num % 2 == 0;
}
