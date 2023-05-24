// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions to use your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What usage information do you need?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines for your project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions to test your project?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What license are you using?',
        choices: ['No License', 'MIT', 'Apache 2.0', 'Boost Software 1.0', 'BSD 3-Clause', 'BSD 2-Clause', 'Perl'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What would you like to name this file?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
];

function promptUser() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile(answers.name, generateMarkdown(answers));
        })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, err => {
        err ? console.error(err) : console.log('Success!')
    });
 }

// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
