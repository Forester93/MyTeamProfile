// get important packages

const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const Choices = require("inquirer/lib/objects/choices");

//intialize Employees

let Employees = [];

//define parents class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getID() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

//define child classes
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}
// to build the body of the readme file
let buildPage = function (
  first,
  last,
  email,
  phoneNumber,
  badges,
  installation,
  languages,
  git,
  description,
  usage,
  projectTitle,
  repository,
  relativeLinkScreenshot,
  test,
  contributing
) {
  let page = `
  # ${projectTitle}.
  
## License
  ${badge()}

## Contents

• [License](#license)
• [Description](#description)
• [Usage](#usage)
• [Installation](#installation)
• [Technologies](#technologies)
• [Test](#test)
• [Links](#links)
• [Questions](#questions)
• [Contributing](#contributing)

## Description

${description}

### Usage

To run the application you need to run the following command line:

\`\`\`
${usage}
\`\`\`

### Installation

To install the application you need to run the following command line:

\`\`\`bash
${installation}
\`\`\`

### Technologies

${buildList()}

### Test

To test the application you need to run the following command line:

\`\`\`bash
${test}
\`\`\`

## Links

### Link to the Deployed Application
[${projectTitle} Deployed Webpage](https://${git}.github.io/${repository}/)

### Link to the Github Repository

[${projectTitle} Github Repo](https://github.com/${git}/${repository}/)

${screenshot()}

## Questions

You can reach out to me over one of the following for any questions about this application.

|Name|Email|Phone Numer|GitHubProfile|
|----|-----|-----------|-------------|
|${first} ${last}|${email}|${phoneNumber}|[${
    first + " " + last
  } Github Profile](https://github.com/${git}/)


## Contributing

${contributing}

      `;

  return page;
};

let teamManagerData = [
  {
    type: "input",
    message: "Please Enter the Team Manager's name: ",
    name: "name",
  },
  {
    type: "input",
    message: "Please Enter the Team Manager's Email: ",
    name: "email",
  },
  {
    type: "input",
    message: "Please Enter the Team Manager's ID: ",
    name: "id",
  },
  {
    type: "input",
    message: "Please Enter the Team Manager's Office Number: ",
    name: "officeNumber",
  },
];

let engineerData = [
  {
    type: "input",
    message: "Please Enter the Engineer's name: ",
    name: "name",
  },
  {
    type: "input",
    message: "Please Enter the Engineer's Email: ",
    name: "email",
  },
  {
    type: "input",
    message: "Please Enter the Engineer's ID: ",
    name: "id",
  },
  {
    type: "input",
    message: "Please Enter the Engineer's Github Handle: ",
    name: "github",
  },
];
let internData = [
  {
    type: "input",
    message: "Please Enter the Intern's name: ",
    name: "name",
  },
  {
    type: "input",
    message: "Please Enter the Intern's Email: ",
    name: "email",
  },
  {
    type: "input",
    message: "Please Enter the Intern's ID: ",
    name: "id",
  },
  {
    type: "input",
    message: "Please Enter the Intern's School Name: ",
    name: "school",
  },
];

function makeChoice() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add an employee to your team?",
        name: "next",
        choices: ["Engineer", "Intern", "Finish Building Team"],
      },
    ])
    .then((response) => {
      switch (response.next) {
        case "Engineer":
          inquirer.prompt(engineerData).then((response) => {
            let engineer = new Engineer(
              response.name,
              response.id,
              response.email,
              response.github
            );
            Employees.push(engineer);
            makeChoice();
          });
          break;
        case "Intern":
          inquirer.prompt(internData).then((response) => {
            let intern = new Intern(
              response.name,
              response.id,
              response.email,
              response.school
            );
            Employees.push(intern);
            makeChoice();
          });
          break;
        case "Finish Building Team":
          console.log(Employees);
      }
    });
}
inquirer.prompt(teamManagerData).then((response) => {
  let manager = new Manager(
    response.name,
    response.id,
    response.email,
    response.officeNumber
  );
  Employees.push(manager);
  makeChoice();
});
