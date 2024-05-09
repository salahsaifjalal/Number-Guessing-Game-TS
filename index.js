#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import myChalkAnimation from "chalk-animation";
import clearTerminal from "clear";
import sysSays from "say";
import makeBox from "boxen";
clearTerminal();
let gameStartingView = function () {
    let gameAnimation = myChalkAnimation.rainbow(makeBox(`   Welcome to CLI based Number Guessing Game!    `, {
        title: "Made by Salahuddin Muhammad",
        titleAlignment: "center",
        borderStyle: "arrow",
        padding: 1,
        margin: 1,
    }));
    setTimeout(() => {
        gameAnimation.stop();
        askQuestion();
    }, 6000);
};
gameStartingView();
sysSays.speak("Welcome to CLI based Number Guessing Game!", undefined, 0.75, (error_found) => {
    if (error_found) {
        console.error(error_found);
    }
});
let askQuestion = async function () {
    let noOfAttempt = 10;
    let computerGeneratedNumber = Math.floor(Math.random() * 10) + 1;
    while (true) {
        if (noOfAttempt !== 0) {
            console.log(chalk.redBright(` ${noOfAttempt} attempts Remaining! `));
            sysSays.speak(`You have ${noOfAttempt} attempts left now.`);
            const userInput = await inquirer.prompt([
                {
                    name: "userNumber",
                    type: "number",
                    message: chalk.magentaBright.underline.bold(`\n Guess Now! What's the number between 1-10?`),
                },
            ]);
            if (!isNaN(userInput.userNumber) &&
                userInput.userNumber > 0 &&
                userInput.userNumber <= 10) {
                if (userInput.userNumber === computerGeneratedNumber) {
                    console.log(chalk.greenBright.bold(` Congratulations! You guessed the correct number! It was ${computerGeneratedNumber} `));
                    sysSays.speak(`Congratulations! You got it.    It was ${computerGeneratedNumber}`);
                    break;
                }
                else {
                    noOfAttempt--;
                }
            }
            else {
                console.log(chalk.red.bold(`Please enter a valid number within the given range`));
            }
        }
        else {
            sysSays.speak(`Now the game over. The number was ${computerGeneratedNumber}`);
            console.log(chalk.bgRed(`Game Over... The number was ${computerGeneratedNumber} `));
            break;
        }
    }
    restartGame();
};
let restartGame = async function () {
    const endingChoices = [
        "Yes, I wish to play again now.",
        "No, I wish to quit the game.",
    ];
    const nowrestartGame = await inquirer.prompt([
        {
            name: "userDecision",
            type: "list",
            message: chalk.yellowBright.underline.bold("\n Decide what you wish to do?"),
            choices: endingChoices,
        },
    ]);
    if (nowrestartGame.userDecision === endingChoices[0]) {
        askQuestion();
    }
    else {
        const endingAnimation = myChalkAnimation.neon(`GOOD BYE! See you next time... :)`);
        setTimeout(() => {
            endingAnimation.stop();
        }, 5000);
        sysSays.speak(`Bye bye, Thnaks for playing the game.`);
    }
};
