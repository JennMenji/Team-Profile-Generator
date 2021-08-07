class Employee {
  constructor (name = "") {
  this.name = name;
  this.id = id;
  this.email = email;
  this.role = role;
  }

  getName()
  getId()
  getEmail()
  getRole()
}

Employee.prototype.getName = function () {
}

console.log("Marcel", 1234, "emailinput", "role");

module.exports = Employee;
