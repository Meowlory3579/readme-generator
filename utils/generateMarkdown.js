// Function that returns a license badge based on user input
function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';
  return `![License](https://img.shields.io/badge/License-${license.replace(' ', '_')}-blue.svg)`;
}

// Function that returns the license link based on user input
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

// Function that renders the license section of README
function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  return `
  ## License
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
  `;
}

// Function that generates the content for README file
function generateMarkdown(data) {
  // dynamically build table of contents based on user input
  let toc = `
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)`;

  // Conditionally include other sections based on user input
  if (data.license && data.license !== 'None') {
    toc += `
  - [License](#license)`;
  }
  if (data.contributing) {
    toc += `
  - [Contributing](#contributing)`;
  }
  if (data.tests) {
    toc += `
  - [Tests](#tests)`;
  }
  toc += `
  - [Questions](#questions)`;

  // Questions section with Email & GitHub link
  const questionsSection = `
  ## Questions
  For any questions, please contact me via email at [${data.email}](mailto:${data.email}).
    
  Additionally, you can find more of my work on my GitHub profile: [${data.githubUsername}](https://github.com/${data.githubUsername})
  `;

  // Generates the rest of the README content
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

  ${licenseBadge}

  ## Description
  ${data.description}

  ${toc}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${licenseSection}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ${questionsSection}

`;
}

// Exports the generateMarkdown function to index.js
module.exports = generateMarkdown;
