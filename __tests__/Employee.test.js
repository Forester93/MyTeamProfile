const Employee = require("../lib/employee.js");

it("Can instantiate the Employee Instance", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

it("Can set name via constructor arguments", () => {
  const employee = new Employee("Mark");

  expect(employee.name).toBe("Mark");
});

it("Can set id via constructor argument", () => {
  const employee = new Employee("Mark", 1);

  expect(employee.id).toBe(1);
});

it("Can set email via constructor argument", () => {
  const employee = new Employee("Mark", 1, "mark@company.com");

  expect(employee.email).toBe("mark@company.com");
});

it("Can get name via getName()", () => {
  const employee = new Employee("Mark", 1, "mark@company.com");

  expect(employee.getName()).toBe("Mark");
});

it("Can get id via getID()", () => {
  const employee = new Employee("Mark", 1, "mark@company.com");

  expect(employee.getID()).toBe(1);
});

it("Can get email via getEmail()", () => {
  const employee = new Employee("Mark", 1, "mark@company.com");

  expect(employee.getEmail()).toBe("mark@company.com");
});

it("getRole() should return 'Employee'", () => {
  const employee = new Employee("Mark", 1, "mark@company.com");

  expect(employee.getRole()).toBe("Employee");
});
