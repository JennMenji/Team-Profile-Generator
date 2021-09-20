const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/generate-homepage");
const Prompt = require("inquirer/lib/prompts/base");

const createEmployee = () => {
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
      type: "list",
      name: "role",
      message: "Select Employee's Role.",
      choices: ["Manager", "Engineer", "Intern", "Employee"],
    },
    {
      type: "number",
      name: "officenumber",
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
    {
      type: "confirm",
      name: "confirmAddEmp",
      message: "Would you like to register another Employee?",
      default: false,
    },
  ]);
  // .then((basicEmployeeData) => {
  //   promptAdditional(basicEmployeeData);
  // });
  // .then(({ name }) => {
  //   console.log(name);
  //   this.manager = new Manager(name);
  // });

  // this.manager.getRole();
};

// const promptAdditional = (employeeData) => {
//   console.log(employeeData);

//   if (!employeeData.employees) {
//     employeeData.employees = [];
//   }

//   const employeeArr = [];

//   const role = employeeData.role;

//   if (role === "Manager") {
//     console.log("I am Manager");
//     return inquirer
//       .prompt([
//         {
//           type: "number",
//           name: "office-number",
//           message: "Enter the Employee's Office Number. (Required)",
//           validate: (numInput) => {
//             if (typeof numInput !== "number") {
//               console.log("Please enter the Employee's Office Number.");
//               return false;
//             } else {
//               return true;
//             }
//           },
//         },
//         {
//           type: "confirm",
//           name: "confirmAddEmp",
//           message: "Would you like to register another Employee?",
//           default: false,
//         },
//         ,
//       ])
//       .then((roleData) => {
//         basicEmpData.employees.push(roleData);

//         if (roleData.confirmAddEmp) {
//           createEmployee();
//         } else {
//           console.log(employeeArr);
//           return employeeArr;
//         }
//       });
//   } else if (role === "Engineer") {
//     console.log("I am Engineer");
//   } else if (role === "Intern") {
//     console.log("I am Intern");
//   } else if (role === "Employee") {
//     console.log("I am Employee");
//   }

// return (
//   inquirer
//     .prompt([
//       {
//         type: "confirm",
//         name: "confirmAddEmp",
//         message: "Would you like to register another Employee?",
//         default: false,
//       },
//     ])
//     // .then((role) => {
//     //   if (role === "Manager") {
//     //     console.log("correct");
//     //   }
//     // })
//     .then((empRolesData) => {
//       empData.roles.push(empRolesData);

//       if (empRolesData.confirmAddEmp) {
//         return promptRoles(empData);
//       } else {
//         console.log(empData);
//         return empData;
//       }
//     })
// );
// };

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

createEmployee()
  // .then(promptRoles)
  // .then((data) => {
  //   console.log(data);
  // });
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
