//TODO: Add default answers
//what command sould be run to install dependencies
//what command should be run to run tests
//how to use: clone it and run it
//how to add to contribute

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter the description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter the installation instructions for your project:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter any usage information for your project:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter the contribution guidelines for your project:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter any test instructions for your project:',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Enter the license you are using for your project:',
        choices: ['No License', 'MIT', 'Apache 2.0', 'Boost Software 1.0', 'BSD 3-Clause', 'BSD 2-Clause', 'Perl'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter the name of your .md file:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter your github username:',
        name: 'github',
    },

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
        err ? console.error(err) : console.log('README file created!')
    });
 }

// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
