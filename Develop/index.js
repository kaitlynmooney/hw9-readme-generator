// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const {writeFile} = require('fs').promises;
// TODO: Create an array of questions for user input
const questions = () => { 
return inquirer.prompt([
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
          message: 'Enter table of contents here.',
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
            choices: ["MIT License", "GNU GPLv3"],

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
};

// TODO: Create a function to initialize app
function init() {
questions()
.then((data) => writeFile('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();