#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => new Promise((res, rej) => setTimeout(res, 2000));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(`***** Let's start counting *****`);
    await sleep();
    rainbowTitle.stop();
}
welcome();
async function askQ() {
    let Q = await inquirer.prompt([
        {
            type: "input",
            name: "msg",
            message: chalk.redBright("Please enter the paragraph"),
        }
    ]);
    const paraToArr = Q.msg.split(" ");
    console.log(`Words in your paragraph are: ${paraToArr.length}`);
    const charsInPara = Q.msg.replace(/ /g, "");
    console.log(`Characters in your paragraph are: ${charsInPara.length}`);
}
async function startAgain() {
    do {
        await askQ();
        var playAgain = await inquirer.prompt({
            type: "input",
            name: "again",
            message: chalk.green("Want to count again? Press Y or N"),
        });
    } while (playAgain.again === "Y" || playAgain.again === "y");
}
startAgain();
