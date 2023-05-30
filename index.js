
//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const validator = require("email-validator");
const generateMarkdown = require('./utils/generateMarkdown');

//array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project:',
        name: 'title',
        validate: (answer) => !answer ? "You must provide a title" : true
    },
    {
        type: 'input',
        message: 'Enter the description of your project:',
        name: 'description',
        validate: (answer) => !answer ? "You must provide a description" : true
    },
    {
        type: 'input',
        message: 'Enter the installation instructions for your project:',
        name: 'installation',
        validate: (answer) => !answer ? "You must provide installation instructions" : true
    },
    {
        type: 'input',
        message: 'Enter any usage information for your project:',
        name: 'usage',
        validate: (answer) => !answer ? "You must provide usage information" : true
    },
    {
        type: 'input',
        message: 'Enter the contribution guidelines for your project:',
        name: 'contribution',
        validate: (answer) => !answer ? "You must provide contribution guidelines" : true
    },
    {
        type: 'input',
        message: 'Enter any test instructions for your project:',
        name: 'tests',
        validate: (answer) => !answer ? "You must provide test instructions" : true
    },
    {
        type: 'list',
        message: 'Enter the license you are using for your project:',
        choices: ['No License', 'MIT', 'Apache 2.0', 'Boost Software 1.0', 'BSD 3-Clause', 'BSD 2-Clause', 'Perl', 'Eclipse Public License 1.0', 'IBM Public License Version 1.0'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter the name of your .md file:',
        name: 'name',
        default: 'README'
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
        validate: (answer) => !validator.validate(answer) ? "You must provide a valid email address" : true
    },
    {
        type: 'input',
        message: 'Enter your github username:',
        name: 'github',
        validate: (answer) => !answer ? "You must provide a username" : true
    },

];

//prompt user
function promptUser() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile(answers.name, generateMarkdown(answers));
        })
}

//write to file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, err => {
        err ? console.error(err) : console.log(`${fileName}.md created!`)
    });
}

// function to initialize app
function init() {
    promptUser();
}

// function call to initialize app
init();
