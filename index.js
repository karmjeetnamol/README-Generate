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
      
  ]).then(({
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
      }else if (license === 'GNU') {
        return  `![GNU](https://img.shields.io/badge/license-gnu-brightgreen)`
      } else if (licenseType === 'Apache') {
        return  `![Apache](https://img.shields.io/badge/license-apache-brightgreen)`
      } else {
        license.license = "None"
      }
      return MIT;
    };


function renderLicenseLink(license) {
      if(license==='MIT'){
  return `![MIT](https://img.shields.io/badge/license-MIT-green)`
      }
    }

function renderLicenseSection(license) {
  if(license==='MIT'){
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
      `
}
}
const template =`# ${name}
${renderLicenseBadge(license)}
${renderLicenseLink(license)}
${renderLicenseSection(license)}
  
# Table of Content:


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
  )
  
function createNewFile(fileName,data){
    fs.writeFile(fileName,data,(err)=>{
      if(err){
        console.log(err)
      }
      console.log(`Your README has been generated`);
    })
  };
