// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if string is empty, this will output an empty string
  if (license) {
    return `![License](https://img.shields.io/badge/License-${license}-lightblue.svg)`
  } else {
    return '';
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // const licenseLinks = [
  //   '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)', '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)', '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)', '![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)', '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)', '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)', '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)', '![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)'
  //];
  if (license) {
    return '[License](#license)';
  } else {
    return ''; // Return empty string if no valid license provided
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
//   const licenseInfo = {
//   badge: licenseLinks[license],
//   liscenseName: licenseBadges[license]
// };

  if (license) {
    return `## License

    This project is licensed under the ${license} license.`;
  } else {
    return '';
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contributing, tests, username}) {
  const markdown = 
    `# ${title}

    ${renderLicenseBadge(license)}

    ## Description
    ${description}

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - ${renderLicenseLink(license)}
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ##Installation
    ${installation}

    ## Usage
    ${usage}

    ## License
    This application is covered by the ***${license}***.
    
    ## Contributing
    ${contributing}

    ## Tests
    ${tests}

    ## Questions
    Should you have any specific questions regarding my application or would like to compare with my other deployed applcations, contact and general information can be found on my Github homepage found here: GitHub: [@${username}](https://github.com/${username})
    `;
  
  return markdown;
};

module.exports = generateMarkdown;
