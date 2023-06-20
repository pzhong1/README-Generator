// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  }
  if (license === 'Apache License2.0') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  }
  if (license === 'GNU General Public License v3.0') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  if (license === 'Boost Software License 1.0') {
    return '![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)';
  }
  return '';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  }
  if (license === 'Apache License2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  if (license === 'GNU General Public License v3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  }
  if (license === 'Boost Software License 1.0') {
    return 'https://www.boost.org/LICENSE_1_0.txt';
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === 'none') {
    return '';
  } else {
    return `
  
  This project is covered under the ${license}. please click on the links below for more infomation.
  
  ${renderLicenseBadge(license)}  ${renderLicenseLink(license)}
  `;
  }
}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## Title
   ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
 
  
  ## Contributing
  ${data.contributing}
  
  
  ## Tests
  ${data.test}
  
  ## Questions

  :octocat:  GitHub: [@${data.github}](https://github.com/${data.github})   
  :e-mail:  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
