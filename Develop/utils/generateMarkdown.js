const licenseBadge_Links = require("./licenses.js");
// function to generate markdown for README
function generateMarkdown(data) {
  // set url for license badge
  data.licenseBadge = licenseBadge_Links[data.license];

  // return markdown content
  return `${data.licenseBadge}
> ## Project Name
${data.title}

>## Description
${data.description}

>## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

>## Installation
To install dependencies, run the following command in your Terminal:

${data.installation}

>## Usage
${data.usage}

>## License
This repository is licensed under the ${data.license} license. ${data.licenseBadge}

>## Contributing
${data.contribute}

>## Tests
To run a test please run the following command in your Terminal:

${data.tests}
\`
>## Questions
Do you have questions about this repository? 

Please contact me at ${data.email}. View more of my work in GitHub at https://github.com/${data.username}. 

Created by [@ElyCano](https://elycano.github.io/Professiona_Portafolio/) - feel free to contact me!
`;
}

module.exports = generateMarkdown;
