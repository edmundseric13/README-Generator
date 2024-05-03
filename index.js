const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address',
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

function generateMarkdown(data) {
  return `# ${data.title}

  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  `;
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile('README.md', answers);
  });
}

init();