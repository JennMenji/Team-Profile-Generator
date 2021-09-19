const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id) {
    super(name, id);
    // this.officeNumber = officeNumber;
  }

  getRole() {
    return `your name is ${this.name}`;
  }
}

module.exports = Manager;

// WHEN AM I SUPPOSED TO USE PROTOTYPES? OR JUST THE REGULAR METHOD?
