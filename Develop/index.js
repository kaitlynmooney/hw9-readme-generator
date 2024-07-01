// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
const questions = [
    .prompt([
        {
          type: 'input',
          message: 'Enter a title for your README.',
          name: 'title',
        },
        {
          type: 'input',
          message: 'Enter a description for your README.',
          name: 'description',
        },
        {
          type: 'input',
          message: 'What is your favorite food?',
          name: 'contents',
        },
        {
            type: 'input',
            message: 'Enter installation instructions for your README.',
            name: 'installation',
          },
          {
            type: 'input',
            message: 'Enter usage information for your README.',
            name: 'usage',
          },  
          {
            type: 'list',
            message: 'Select a license for your README.',
            name: 'license',
          }, 
          {
            type: 'input',
            message: 'Enter contribution guidelines for your README.',
            name: 'contributing',
          }, 
          {
            type: 'input',
            message: 'Enter test instructions for your README.',
            name: 'tests',
          }, 
          {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
          }, 
          {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
          }, 
      ])
       
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();