import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.bold.magentaBright("Welcome to CLI based Number Guessing Game!")
);

let computerGeneratedNumber = Math.floor(Math.random() * 21);
//console.log(computerGeneratedNumber)

const askPlayAgain = await inquirer.prompt([
  {
    name: "userEnter",
    type: "string",
    message: chalk.bold.greenBright(
      "Would you like to play! Press y for YES and n for NO"
    ),
  },
]);

switch (askPlayAgain.userEnter) {
  case "n":
    console.log(chalk.bold.bgRedBright("The game ends! "));
    break;
  case "y":
    const guessedNumber = await inquirer.prompt([
      {
        name: "userInput",
        type: "number",
        message: chalk.bold.greenBright(
          "Enter the number from 0 to 20, you guessed!"
        ),
      },
    ]);
    if (guessedNumber.userInput === computerGeneratedNumber) {
      console.log(
        chalk.bold.blueBright(
          "Congratulation! You Correctly guessed the number."
        )
      );
    } else {
      console.log(
        chalk.bold.redBright(
          "Sorry! You could not guess the number. The number was "
        ) + computerGeneratedNumber
      );
    }
    break;
}
