// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project? ',
        prefix: '>'
    },
    {
        type: 'input',
        name: 'description',
        message: 'please enter description of the project ',
        prefix: '>'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'plaese descript the installation that you used: ',
        prefix: '>'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'what is the usage? ',
        prefix: '>'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'please enter contribution guidelines: ',
        prefix: '>'
    },
    {
        type: 'list',
        name: 'license',
        message: 'pick a licnense for this project',
        choices: ['MIT', 'Apache License2.0', 'GNU General Public License v3.0', 'Boost Software License 1.0', 'None'],
        prefix: '>'
    },
    {
        type: 'input',
        name: 'test',
        message: 'please enter the test instruction if any ',
        prefix: '>'
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your Github username? ',
        prefix: '>'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your Email address? ',
        prefix: '>'
    },
];

// add new function for ternimal output
function generatePlainText(data) {
    return `
    Title: ${data.title}
    Description: ${data.description}
    
    Table of Contents:
      * Installation
      * Usage
      * License
      * Contributing
      * Tests
      * Questions
    
    Installation: ${data.installation}
    Usage: ${data.usage}
    License: This project is covered under the ${data.license}.
    Contributing: ${data.contributing}
    Tests: ${data.test}
    GitHub: ${data.github}  (https://github.com/${data.github})
    Email: ${data.email}
    `;
  }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success!');
            
        }
    });
}




// TODO: Create a function to initialize app
function initialize() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(generatePlainText(answers));
            writeToFile('/Users/zhongpuze/Desktop/README-Generator/test/README.md', generateMarkdown(answers) );
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
initialize();
