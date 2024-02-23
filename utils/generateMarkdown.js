// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';
  return `![License](https://img.shields.io/badge/License-${license.replace(' ', '_')}-teal.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') return '';
  let licenseLink = '';
  switch (license) {
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'Apache 2.0':
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GPL 3.0':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'BSD 3':
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  return `
  ## License
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents (Optional)
  ${data.tableOfContents}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${licenseSection}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions, please contact me at [${data.email}](mailto:${data.email}).

`;
}

// Export the generateMarkdown function to index.js
module.exports = generateMarkdown;
