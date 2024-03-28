import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.bold.magentaBright("Welcome to CLI based Number Guessing Game!")
);

//let userEnter: boolean
let computerGeneratedNumber = Math.floor(Math.random() * 21);

const guessedNumber = await inquirer.prompt([
  {
    name: "userInput",
    type: "number",
    message: chalk.bold.greenBright(
      "Enter the number from 0 to 20, you guessed!"
    ),
  },

  {
    name: "userEnter",
    type: "string",
    message: chalk.bold.greenBright(
      "Would you like to play again! Press y for YES and n for NO"
    ),
  },
]);

let myfunction = () => {
  if (guessedNumber.userInput === computerGeneratedNumber) {
    console.log(
      chalk.bold.blueBright("Congratulation! You Correctly guessed the number.")
    );
  } else {
    console.log(
      chalk.bold.redBright(
        "Sorry! You could not guess the number. The number was "
      ) + computerGeneratedNumber
    )
  }
}
let myfunction2= () => { 
//console.log(guessedNumber.message);
//if (guessedNumber.userEnter === "y" || guessedNumber === "Y") {
//  myfunction();
}               


myfunction();
//myfunction2()
//console.log(guessedNumber.message);
