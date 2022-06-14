const inquirer = require('inquirer');
const utils = require('./utils/pageGenerator');

const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'What is your story?',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your linkedIn?',
        name: 'linkedIn',
    },
    {
        type: 'input',
        message: 'What is your GitHub?',
        name: 'gitHub',
    },
    {
        type: 'rawlist',
        message: 'What license was this created with?',
        name: 'license',
        choices: ['MIT', 'Apache', 'MPL', 'GPL', 'CC', 'BSD']
    }
];

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    utils.generatePage(answers);
});
