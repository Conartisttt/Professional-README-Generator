const licenses = ["Apache 2.0", "MIT", "Boost Software 1.0", "BSD 3-Clause", "BSD 2-Clause", "Pearl"];
const licenseBadges = ["![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)", "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)", "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)", "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)", "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)", "![License](https://img.shields.io/badge/License-Perl-0298c3.svg)"]
const licenseLinks = ["[License](https://opensource.org/licenses/Apache-2.0)", "[License: MIT](https://opensource.org/licenses/MIT)", "[License](https://www.boost.org/LICENSE_1_0.txt)", "[License](https://opensource.org/licenses/BSD-3-Clause)", "[License](https://opensource.org/licenses/BSD-2-Clause)", "[License](https://opensource.org/licenses/Artistic-2.0)"]
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  for (let i = 0; i < licenses.length; i++) {
    if (license === licenses[i]) {
      return licenseBadges[i];
    }
  }
  return "";
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  for (let i = 0; i < licenses.length; i++) {
    if (license === licenses[i]) {
      return licenseLinks[i];
    }
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (renderLicenseLink(license) === "") {
    return "";
  } else {
    return ` ## License
  See more information about the license here: ${renderLicenseLink(license)}
  `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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

If you have any questions, feel free to contact me at: ${data.email}\n
Explore my repository to see my other projects: [My Github Repo](https://github.com/${data.github})\n
  
`;
}


module.exports = generateMarkdown;
