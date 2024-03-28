import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    { type: "number",
        message: (chalk.red("Enter first number")),
        name: "firstNumber"
    },
    {
        type: "number",
        message: (chalk.blue("Enter second number")),
        name: "secondNumber"
    },
    {
        type: "list",
        message: (chalk.green("Select one of the operators to perform operation")),
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponential"]
    },
]);
//conditional operators
if (answers.operator === "Addition") {
    console.log(chalk.bgGray(answers.firstNumber + answers.second));
}
else if (answers.operator === "Subtraction") {
    console.log(chalk.bgYellow(answers.firstNumber - answers.secondNumber));
}
else if (answers.firstNumber === "Multipluication") {
    console.log(chalk.bgBlueBright(answers.firstNumber * answers.secondNumber));
}
else if (answers.operator === "Division") {
    console.log(chalk.bgBlack(answers.firstNumber / answers.secondNumber));
}
else if (answers.operator === "Exponential") {
    console.log(chalk.bgWhite(answers.firstNumber % answers.secondNumber));
}
else {
    console.log(chalk.bgCyanBright("Please select valid operator"));
}
