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
  const license = data.license;
  const github = data.github;
  const email = data.email;
  return `# ${title}
  ## Description

  ${description}

  ## Table of Contents
  
  ${contents}

  ## Installation
  
${installation}
  
  ## Usage
  
  ${usage}

  ## Credits

  ${github}
  ${email}

  ## License
  
  ${license}
  
`;
}

module.exports = generateMarkdown;