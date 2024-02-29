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

// Beginning: Function that generates the content for README file
function generateMarkdown(data) {
  // Beginning: Dynamically build table of contents based on user input
  let toc = `
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)`;

  let hasInput = false; // Used to track what sections to add to README

  if (data.usage) {
    toc += `
  - [Usage](#usage)`;
    hasInput = true;
  }
  if (data.license && data.license !== 'None') {
    toc += `
  - [License](#license)`;
    hasInput = true;
  }
  if (data.contributing) {
    toc += `
  - [Contributing](#contributing)`;
    hasInput = true;
  }
  if (data.tests) {
    toc += `
  - [Tests](#tests)`;
    hasInput = true;
  }
  if (data.functionality) {
    toc += `
  - [Functionality Demo](#functionality-demo)`;
    hasInput = true;
  }
  if (data.url) {
    toc += `
  - [Deployed URL](#deployed-url)`;
    hasInput = true;
  }
  if (data.credits) {
    toc += `
  - [Credits](#credits)`;
    hasInput = true;
  }
  toc += `
  - [Questions](#questions)`;
  // End: Dynamically build table of contents based on user input

  // Renders questions section of README
  const questionsSection = `
  ## Questions
  For any questions, please contact me via email at [${data.email}](mailto:${data.email}).
    
  Additionally, you can find more of my work on my GitHub profile: [${data.githubUsername}](https://github.com/${data.githubUsername})
  `;

  // Renders Badge & License Section of README
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  // Start generating README content
  let readmeContent = `# ${data.title}\n\n`;

  if (licenseBadge) {
    readmeContent += `${licenseBadge}\n\n`;
  }
  if (data.description) {
    readmeContent += `## Description\n${data.description}\n\n`;
  }
  if (hasInput) {
    readmeContent += `${toc}\n\n`;
  }
  if (data.installation) {
    readmeContent += `## Installation\n${data.installation}\n\n`;
  }
  if (data.usage) {
    readmeContent += `## Usage\n${data.usage}\n\n`;
  }
  readmeContent += `${licenseSection}\n`;
  if (data.contributing) {
    readmeContent += `## Contributing\n${data.contributing}\n\n`;
  }
  if (data.tests) {
    readmeContent += `## Tests\n${data.tests}\n\n`;
  }
  if (data.functionality) {
    readmeContent += `## Functionality Demo\n${data.functionality}\n\n`;
  }
  if (data.url) {
    readmeContent += `## Deployed URL\n${data.url}\n\n`;
  }
  if (data.credits) {
    readmeContent += `## Credits\n${data.credits}\n\n`;
  }
  readmeContent += `${questionsSection}\n`;

  return readmeContent;
}
// End: Function that generates the content for README file

// Exports the generateMarkdown function to index.js
module.exports = generateMarkdown;
