// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if string is empty, this will output an empty string
  if (license) {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license}`
  } else {
    return '';
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

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
