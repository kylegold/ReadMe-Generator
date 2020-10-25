// Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// array of questions for user
const questions = [
    {
    type: "input",
    question: "Choose a self-explaining name for your project.",
    name: "Title"
    },
    {
    type: "input",
    question: "Let people know what your project can do specifically.",
    name: "Description"
    },
    {
    type: "input",
    question: "What are the steps required to install your project?",
    name: "Installation"
    },
    {
    type: "input",
    question: "It's helpful to have inline the smallest example of usage that you can demonstrate.",
    name: "Usage"
    },
    {
    type: "input",
    question: "Who was involved in the making of this code?",
    name: "Credits"
    },
    {
    type: "list",
    question: "What license are you releasing this project under?",
    name: "License",
    choices: [
        "MIT",
        "GPLv3",
        "Apache License 2.0",
        "BSD" 
    ]
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions).
    then(answers => {
        console.log(answers)
        const read = generateMarkdown(answers)

        fs.writeFile('readme.md', read , 'utf8', err => {
            if (err) {
                throw err;
            }
        });
    })
 }

//  fs.readFile("readme.md", "utf8", function(err, data) {
//       console.log(data)
//  })


// function call to initialize program
init();
