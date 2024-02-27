// Packages required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the project title?',
    validate: input => {
      if (input.trim() === '') {
        return 'Please enter a project title.';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
    validate: input => {
      if (input.trim() === '') {
        return 'Please enter a project description.';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to this project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can users test this project?',
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username for the Questions section:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Provide an email address where users can send questions or feedback.',
    validate: input => {
      if (input.trim() === '') {
        return 'Please enter an email address.';
      }
      // Simple email validation
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(input)) {
        return 'Please enter a valid email address.';
      }
      return true;
    }
  },
];

// Function to ingest file name and user input, then write it to README
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('Successfully created README.md!');
  });
}

// Function to prompt user with questions from questions array, then process and forward answers to writeToFile function
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
  });
}

init();
