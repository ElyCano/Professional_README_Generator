// TODO: Include packages needed for this application
//**package.json using npm init
//**package-lock.jason using npm install inquirer

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMd = require("./utils/generateMarkdown");

// This is to set the fs.writeFile function to use promises
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description of your project.",
    name: "description",
  },
  {
    type: "list",
    message: "What license should your project have?",
    name: "license",
    choices: [
      "MIT",
      "Unlicense",
      "Apache 2.0",
      "GNU v3",
      "BSD 3-Clause",
      "Mozilla Public License 2.0",
    ],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies? Type:",
    name: "installation",
    default: "npm i",
  },
  {
    type: "input",
    message: "What command should be run to run a test? Type:",
    name: "tests",
    default: "npm run test",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repository?",
    name: "usage",
  },
  {
    type: "input",
    message:
      "What does the user need to know about contributing to the repository?",
    name: "contribute",
  },
];

// This function is to prompt user - returns answers object
const promptUser = () => {
  return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  return writeFileAsync(fileName, data);
};

// TODO: Create a function to initialize app
const init = async () => {
  try {
    console.log(
      "Welcome to the Professional README generator. Please answer the following questions:"
    );

    // ask user for answers to questions
    const answers = await promptUser();

    // create markdown content from user answers
    const fileContent = generateMd(answers);

    // write markdown content to README.md file
    await writeToFile("generated-README.md", fileContent);

    // notify user that file has been written
    console.log("README.md created in this folder.");
  } catch (err) {
    console.error("Error creating README. File not created.");
    console.log(err);
  }
};

// Function call to initialize app
init();
