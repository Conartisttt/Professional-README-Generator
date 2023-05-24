// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if(license === "Apache 2.0"){
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  } else if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "Boost Software 1.0") {
    return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
  } else if (license === "BSD 3-Clause") {
    return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
  } else if (license === "BSD 2-Clause"){
    return "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)"
  } else if (license === "Pearl") {
    return "![License](https://img.shields.io/badge/License-Perl-0298c3.svg)"
  } else {
    return "";
  }
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "Apache 2.0"){
    return "[License](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "MIT") {
    return "[License: MIT](https://opensource.org/licenses/MIT)"
  } else if (license === "Boost Software 1.0") {
    return "[License](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license === "BSD 3-Clause") {
    return "[License](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license === "BSD 2-Clause"){
    return "[License](https://opensource.org/licenses/BSD-2-Clause)"
  } else if (license === "Pearl") {
    return "[License](https://opensource.org/licenses/Artistic-2.0)"
  } else {
    return "";
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ` ## License\n
  ${renderLicenseLink(license)}
  `

 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  console.log(renderLicenseBadge(data.license));
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation Instruction](#installation)
- [Usage Information](#usage)
- [Contribution Guidelines](#contributing)
- [Test Instructions](#tests)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
https://github.com/${data.github}\n
${data.email}\n





  
`;
}


module.exports = generateMarkdown;
