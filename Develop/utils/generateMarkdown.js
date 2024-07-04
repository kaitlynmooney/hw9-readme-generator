// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (license != "None") {
    licenseBadge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
let licenseLink;
switch(license) {
  case "MIT":
    licenseLink = "https://mit-license.org/";
    break;
    case "GNU GPLv3":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
      case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
      default:
        licenseLink = "";
        break;
    }
  return licenseLink;
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  let licenseSection = "";
  if (license != "None") {
    licenseSection += "## License\n"
    licenseSection += "Please see " + renderLicenseLink(license) + " to get detailed information for this license\n";
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const title = data.title;
  const description = data.description;
  const contents = data.contents;
  const installation = data.installation;
  const usage = data.usage;
  const license = renderLicenseSection;
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

  ## License

  ${license}

## Questions

My github: ${github}
My email: ${email}
  
`;
}

module.exports = generateMarkdown;