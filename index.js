const inquirer = require("inquirer");
// const {writeFile}

const promptManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message:
        "The following few questions pertain to you as the Team Manager. What is your name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name.");
          return false;
        }
      },
    },
  ]);
};

promptManager();
