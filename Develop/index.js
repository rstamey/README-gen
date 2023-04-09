


const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project:',
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'Unlicense']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines for your project:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions for your project:'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];


function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README file created successfully!')
  );
}


function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeTemplate = `# ${answers.title}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

![License: ${answers.license}](https://img.shields.io/badge/License-${encodeURIComponent(answers.license)}-blue.svg)

This application is covered under the ${answers.license} license.

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

For questions or concerns about this project, please contact me at ${answers.email}. You can also find more of my work at [github.com/${answers.github}](https://github.com/${answers.github}/).
`;

      writeToFile('README.md', readmeTemplate);
    })
    .catch((err) => console.error(err));
}


init();

