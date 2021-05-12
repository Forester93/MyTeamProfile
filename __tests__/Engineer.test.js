const Employee = require("../lib/employee.js");
const Engineer = require("../lib/engineer.js");

it("Can set GitHub account via constructor argument", () => {
  const employee = new Engineer(
    "Mark",
    1,
    "Mark@example.com",
    "markexample123"
  );
  expect(employee.github).toBe("markexample123");
});

it("getRole() should return 'Engineer'", () => {
  const employee = new Engineer(
    "Mark",
    1,
    "Mark@example.com",
    "markexample123"
  );

  expect(employee.getRole()).toBe("Engineer");
});

it("Can get Github username via getGithub()", () => {
  const employee = new Engineer(
    "Mark",
    1,
    "Mark@example.com",
    "markexample123"
  );

  expect(employee.getGithub()).toBe("markexample123");
});
