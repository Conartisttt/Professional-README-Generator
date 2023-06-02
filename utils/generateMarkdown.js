const licenses = ["Apache 2.0", "MIT", "Boost Software 1.0", "BSD 3-Clause", "BSD 2-Clause", "Pearl", "Eclipse Public License 1.0", "IBM Public License Version 1.0"];
const licenseBadges = ["![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)", "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)", "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)", "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)", "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)", "![License](https://img.shields.io/badge/License-Perl-0298c3.svg)", "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)", "![License](https://img.shields.io/badge/License-IPL_1.0-blue.svg)"]
const licenseLinks = ["[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)", "[License: MIT](https://opensource.org/licenses/MIT)", "[License: Boost Software 1.0](https://www.boost.org/LICENSE_1_0.txt)", "[License: BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)", "[License: BSD 2-Clause](https://opensource.org/licenses/BSD-2-Clause)", "[License: Pearl](https://opensource.org/licenses/Artistic-2.0)", "[License: Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0)", "[![License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)"]

// return license badge
function renderLicenseBadge(license) {
  for (let i = 0; i < licenses.length; i++) {
    if (license === licenses[i]) {
      return licenseBadges[i];
    }
  }
  return "";
}

// return license link
function renderLicenseLink(license) {
  for (let i = 0; i < licenses.length; i++) {
    if (license === licenses[i]) {
      return licenseLinks[i];
    }
  }
  return "";
}

// return license section
function renderLicenseSection(license) {
  if (renderLicenseLink(license) === "") {
    return "";
  } else {
    return ` ## License
  The license this appliction is covered under is: ${license}.\n  
  See more information about the license here: ${renderLicenseLink(license)}
  `
  }
}

// generate markdown for README
function generateMarkdown(data) {
  if (data.license == "No License") {
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
  - [Questions](#questions)
  
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
  
  If you have any questions, feel free to contact me at: [${data.email}](mailto:${data.email})\n
  Explore my repository to see my other projects: [My Github Repo](https://github.com/${data.github})\n
    
  `;
  } else {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation Instruction](#installation)
  - [Usage Information](#usage)
  - [License Information](#license)
  - [Contribution Guidelines](#contributing)
  - [Test Instructions](#tests)
  - [Questions](#questions)
  
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
  
  If you have any questions, feel free to contact me at: [${data.email}](mailto:${data.email})\n
  Explore my repository to see my other projects: [My Github Repo](https://github.com/${data.github})\n
    
  `;
  }
}


module.exports = generateMarkdown;
