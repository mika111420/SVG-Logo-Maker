const inquirer = require('inquirer');
const { SVG, Path } = require('svg-builder');

function generateLogo(textColor, text, shape, shapeColor) {
    const svg = new SVG().size(300, 200);

    let shapeElement;
    if (shape === 'circle') {
      shapeElement = svg.circle(150, 100, 50);
    } else if (shape === 'triangle') {
      shapeElement = svg.polygon([[150, 50], [250, 150], [50, 150]]);
    } else if (shape === 'square') {
      shapeElement = svg.rect(100, 50, 100, 100);
    }

    const textElement = svg.text(text).center(150,100);
    textElement.fill(textColor);

    shapeElement.fill(shapeColor);

    const svgCreate = svg.render();

    return svgCreate;

}

function startLogoGenerator() {
    inquirer
      .prompt([
        {
          name: 'text',
          message: 'Enter three characters for the logo:',
          validate: (input) => input.length <= 3 || 'Please enter up to three characters.',
        },
        {
          name: 'textColor',
          message: 'Enter the text color:',
          default: 'black',
        },
        {
          name: 'shape',
          message: 'Select a shape:',
          type: 'list',
          choices: ['circle', 'triangle', 'square'],
        },
        {
          name: 'shapeColor',
          message: 'Enter shape color:',
          default: 'blue',
        },
      ])
      .then((answers) => {
        const { textColor, text, shape, shapeColor} = answers;
        const svgCreate = generateLogo(textColor, text, shape, shapeColor);
        const filename = 'logo.svg';
        saveLogoToFile(filename, svgCreate);
        console.log('Generated File Successfully!', filename);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });

}

function saveLogoToFile(filename, svgMarkup) {
    const fs = require('fs');
    fs.writeFileSync(filename, svgMarkup);
  }