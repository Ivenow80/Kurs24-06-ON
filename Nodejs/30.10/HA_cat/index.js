import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import catFacts from "cat-facts";


//Funktion zum erstellen einer Boxen-Box mit einer Zitat
function showCatFact() {
  //Ausülleng des Zitats
  const fact = catFacts.random();

  const quoteBox = boxen(chalk.green(fact), {
    padding: 1,
    margin: 1,
    borderStyle: "double",
  });
  //Zitat in Box anzeigen
  console.log(quoteBox);
}

//Funktion für Benutzereingabe
async function askForUser() {
  const answers = await inquirer.prompt([
    //Hier ergänzen
    {
      type: "input",
      name: "username",
      message: "Wer bist Du?",
    },
    {
      type: "confirm",
      name: "fact",
      message: "Willst du einen neuen Zitat anfordern?",
      default: true,
    },
  ]);
  console.log(chalk.cyan(`Hallo ${answers.username}!`));
  if (answers.fact) {
    showCatFact();
    //askForNewQuote(); //Fragt nach neuem Zitat an
    console.log(chalk.green("Ein neuer Zitat wurde angefordert."));
    await askForUser(); //Fragt nach neuer Zitat an
  } else {
    console.log(chalk.magenta("Danke das du das Programm genuntzt hast."));

    //beendet Programm
    process.exit(0);
  }
}

//Programmstart
async function main() {
  console.log("Willkommen ich wünsche dir viel Freude");
  //Starte benutzerinteraktio
  await askForUser();
}
//Aufrufen des Hauptprogramms
main();
