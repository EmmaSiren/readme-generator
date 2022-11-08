// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
    ${data.description}

  ## Badges
    ${data.license}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License
    This application is covered by the ${data.license} license.
  --- 

  ## Contributing
    ${data.contribution}

  ## Tests
    ${data.test}

  ## Questions
  If you have any questions you can reach me on Github or via email.
    GitHub: ${data.username}
    Email: ${data.email}`
};

module.exports = generateMarkdown;
