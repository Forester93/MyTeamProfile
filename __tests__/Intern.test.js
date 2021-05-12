const Employee = require("../lib/employee.js");
const Intern = require("../lib/intern.js");

it("Can set school via constructor argument", () => {
  const employee = new Intern("Mark", 1, "mark@example.com", "School");

  expect(employee.school).toBe("School");
});

it("Can get school via getSchool()", () => {
  const employee = new Intern("Mark", 1, "mark@example.com", "School");

  expect(employee.getSchool()).toBe("School");
});

it("getRole() should return 'Intern'", () => {
  const employee = new Intern("Mark", 1, "mark@example.com", "School");

  expect(employee.getRole()).toBe("Intern");
});
