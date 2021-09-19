const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/generate-homepage");

// const Employee = require("./Employee");
// const Manager = require("./Manager");
// const Engineer = require("./Engineer");
// const Intern = require("./Intern");
// const Manager = require("./Manager");
const team = [];

const createTeam = () => {
  // This will ask for the manager info
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter employee name. (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter the Employee's ID. (Required)",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter an Employee ID number.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Provide Employee's Email Address. (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please provide the Employee's Email Address.");
          return false;
        }
      },
    },
    {
      type: "number",
      name: "office-number",
      message: "Enter the Employee's Office Number. (Required)",
      validate: (numInput) => {
        if (typeof numInput !== "number") {
          console.log("Please enter the Employee's Office Number.");
          return false;
        } else {
          return true;
        }
      },
    },
  ]);
  // .then(({ name }) => {
  //   console.log(name);
  //   this.manager = new Manager(name);
  // });

  // this.manager.getRole();
};

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "Style sheet copied successfully!",
      });
    });
  });
};

createTeam()
  .then((data) => {
    return generatePage(data);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  });
