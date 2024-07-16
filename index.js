// TODO: Create an array of questions for user input
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please type in the title of your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please type in a description explaining the what, why, and how of your application.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter a a step-by-step description required for other others to install your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter instructions on the usage including any assisting screenshots.'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT license', 'Apache 2.0', 'GNU General Public v3.0', 'Boost', 'BSD 2-Clause', 'Creative Commons', 'Eclipse Public', 'IBM', 'Mozilla Public', 'Perl']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter any contributers towards the creation of your application as well as their Github or webpages if applicable'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter any tests that would be useful in demonstrating your application along with instructions'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your Github Username so users can reach out with any questions'
    }
];

// TODO: Create a function to write README file
function writeREADME(readmeData, filename = './README.md') {
    // Generate the README content using generateMarkdown function
    const generatedREADME = generateMarkdown(readmeData);

    // Write the README file
    fs.writeFile(filename, generatedREADME, err => {
        if (err) {
            console.error(`Error writing file ${filename}:`, err);
        } else {
            console.log(`README file ${filename} has been successfully generated!`);
        }
    });
}


// TODO: Create a function to initialize app
function init() {
    // Prompt user with questions using inquirer
    inquirer.prompt(questions)
        .then(answers => {
            // Pass answers (readmeData) to writeREADME function
            writeREADME(answers);
        })
        .catch(error => {
            console.error('Error occurred during prompt:', error);
        });
}

// Function call to initialize app
init();
