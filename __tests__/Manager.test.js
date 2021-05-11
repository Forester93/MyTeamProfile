const Employee = require("../lib/employee.js");
const Manager = require("../lib/manager.js");

it("Can set office number via constructor argument", () => {
  const employee = new Manager("Mark", 01, "mark@company.com", 101);
  expect(employee.officeNumber).toBe(505);
});

it("getRole() should return 'Manager", () => {
  const employee = new Manager("Mark", 01, "mark@company.com", 101);

  expect(employee.getRole()).toBe("Mark");
});
