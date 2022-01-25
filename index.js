const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');


// Use writeFileSync method to use promises instead of a callback function
 inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name of your repositery?',
      validate: (value)=>{if(value){return true}else {return 'i need a value to continue'}}
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github username?',
      validate: (value)=>{if(value){return true}else {return 'i need a value to continue'}}
    },
    {
      type: 'input',
      name: 'link',
      message: 'Link to your Github profile?',
      validate: (value)=>{if(value){return true}else {return 'i need a value to continue'}}
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email to be reached?',
      validate: (value)=>{if(value){return true}else {return 'i need a value to continue'}}
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description if any?',
      validate: (value)=>{if(value){return true}else {return 'i need a value to continue'}}
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instruction if any?',
      validate: (value)=>{if(value){return true}else {return 'i need a value to continue'}}
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information if any?',
        validate: (value)=>{if(value){return true}else {return 'i need a value to continue'}}
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution lines if any?',
        validate: (value)=>{if(value){return true}else {return 'i need a value to continue'}}
      },
      {
        type: 'list',
        name: 'license',
        message: 'What is your repo license?',
        choices:["MIT","GNU","Apache","None"],
          },
      
  ]
  ).then(({
       name,
       github,
       link,
       email,
       description,
       installation,
       usage,
       contribution,
       git,
       linkedin,
       license,


  }) =>{
    function renderLicenseBadge(license) {
      if(license==='MIT'){
        return `![MIT](https://img.shields.io/badge/license-MIT-green)`
      }
      
    }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
    const template =`# ${name}
${ renderLicenseBadge(license)}  
* [Name](# name)
* [Github](#github)
* [Link](#link)
* [email](#email)
* [Description](#description)
* [installation](#installation)
* [usage](#usage)
* [Contribution](#contribution)
* [license](#license)
 
#  Installation
${installation} 





## Usage  
${usage} 





## Contribution   
${contribution} 





# Contact
* Github :${git}
* Linkedin :${linkedin}
* E-mail :${email}`;


    createNewFile(`./dist/README.md`,template)
  }
  );

  function createNewFile(fileName,data){
    fs.writeFile(fileName,data,(err)=>{
      if(err){
        console.log(err)
      }
      console.log(`Your README has been generated`);
    })
  }


