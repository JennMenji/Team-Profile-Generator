const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const emp = new Employee("Marcel", 1234, "email");

  expect(emp.name).toEqual(expect.any(String));
  expect(emp.id).toEqual(expect.any(Number));
  expect(emp.email).toEqual(expect.any(String));
});
