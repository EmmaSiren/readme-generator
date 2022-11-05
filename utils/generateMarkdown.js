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
// function generateMarkdown(data) {
//   return `# ${data.title}

function generateMarkdown({title, description, installation, usage, contribution, test, license, username, email}) {
  return `# ${title}
  ## Description
    ${description}

  ## Badges
    ${license}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

  ## Installation
    ${installation}

  ## Usage
    ${usage}

  ## License
    This application is covered by the ${license} license.
  --- 

  ## Contributing
    ${contribution}

  ## Tests
    ${test}

  ## Questions
  If you have any questions you can reach me on Github or via email.
    GitHub: ${username}
    Email: ${email}

`;
}

module.exports = generateMarkdown;
