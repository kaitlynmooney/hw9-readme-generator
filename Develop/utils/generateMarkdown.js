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
  const title = data.title;
  const description = data.description;
  const contents = data.contents;
  const installation = data.installation;
  const usage = data.usage;
  const github = data.github;
  const email = data.email;
  return `# ${title}
  ## Description

  ${description}

  ## Table of Contents (Optional)
  
  ${contents}

  ## Installation
  
${installation}
  
  ## Usage
  
  ${usage}

  ## Credits

  ${github}
  ${email}

  ## License
  
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
`;
}

module.exports = generateMarkdown;