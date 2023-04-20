let choise = prompt("Choose Even or Odd");
console.log(choise);

let userNumber = parseInt(prompt("Choose a number from 1 to 5"));
console.log(userNumber);

console.log("The computer number is: ", computerNumber(1, 5));

let sumNumbers = userNumber + computerNumber(1, 5);
console.log(sumNumbers);

function computerNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

let result = 0;
if (isEven(sumNumbers)) {
  result = "Even";
  console.log("The result is Even");
} else {
  result = "Odd";
  console.log("The result is Odd");
}

if (choise == result) {
  console.log("Congratulation, you are the winner!");
} else {
  console.log("I'm sorry, you lost!");
}

function isEven(number) {
  return sumNumbers % 2 == 0;
}
