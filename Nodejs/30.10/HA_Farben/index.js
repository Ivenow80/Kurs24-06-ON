//pakete einfügen
import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import inspirationalQuotes from "inspirational-quotes";

//Funktion zum erstellen einer Boxen-Box mit einer Zitat
function showInspirationalQuote() {
  //Ausülleng des Zitats
  const quote = inspirationalQuotes.getQuote();
  
  const quoteBox = boxen(chalk.green(quote.text), {
    padding: 1,
    margin: 1,
    borderStyle: "double",
  });
  //Zitat in Box anzeigen
  console.log(quoteBox);
}

//Funktion für Benutzereingabe
async function showInspirationalQuote() {
  const answers = await inquirer.prompt([
    {
      type: "confirm",
      name: "getQuote",
      message: "Wollen Sie einen neuen Zitat anfordern?",
      default: true,
    },
  ]);

  if (answers.getQuote) {
    showInspirationalQuote();
    //askForNewQuote(); //Fragt nach neuem Zitat an
    console.log(chalk.green("Ein neuer Zitat wurde angefordert.")); //soll angezeigt werden
  } else {
    console.log(chalk.magenta("Danke das du das Programm genuntzt hast."));
    //beendet Programm
    process.exit(0);
  }
}

//Programmstart
async function main() {
  console.log(chalk.cyan("Willkommen zu unserem Zitatsgenerator!"));

  //Starte benutzerinteraktion
  await askForNewQuote();
}
//Aufrufen des Hauptprogramms
main();
