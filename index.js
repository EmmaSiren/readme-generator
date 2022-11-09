// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Describe your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the installation instructions for your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What information is needed for usage?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What are the contribution guidelines for your project?',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'What are the instructions for testing?',
    name: 'test',
  },
  {
    type: 'list',
    message: 'What license is your project covered under?',
    name: 'license',
    choices: ['GNU AGPLv3', 'Apache 2.0', 'MIT', 'Boost Sofware', 'None'],
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  }
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) { 
  return fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log('README created!');
  });
};

// // TODO: Create a function to initialize app
function init() {
 inquirer.prompt(questions).then((answers) => {
  writeToFile('README-generated.md', md((answers)));
 });
};

// // Function call to initialize app
init();
