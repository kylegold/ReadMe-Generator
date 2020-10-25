// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description 
  ${data.Description}

  ## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#Credits)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation
  ${data.Installation}

  ## Usage 
  ${data.Usage}

  ## Credits
  ${data.Credits}

  ## License
  ${data.License}

  ## Contributing
  ${data.Contributing}
 
  ## Tests
  ${data.Tests}

  ## Questions
  ${data.Contact}
  ${data.Questions}
`;
}

module.exports = generateMarkdown;
