const Employee = require("../lib/employee.js");
const Manager = require("../lib/manager.js");

it("Can set office number via constructor argument", () => {
  const manager = new Manager("Mark", 1, "mark@company.com", 101);

  expect(manager.officeNumber).toBe(101);
});

it("returns 'Manager' from the method getRole()", () => {
  const manager = new Manager("Mark", 1, "mark@company.com", 101);

  expect(manager.getRole()).toBe("Manager");
});
