// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description 
  ${data.Description}

  ## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  ${data.Installation}

  ## Usage 
  ${data.Usage}

  ## Credits
  ${data.Credits}

  ## License
  ${data.License}
`;
}

module.exports = generateMarkdown;
