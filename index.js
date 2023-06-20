const inquirer = require('inquirer');

const { Triangle, Circle,  Square } = require('./lib/shapes');
const SVG = require('./lib/svg')

function generateLogo(textColor, text, shape, shapeColor) {
    let shapeElement;
    if (shape === 'circle') {
      shapeElement = new Circle(shapeColor);
    } else if (shape === 'triangle') {
      shapeElement = new Triangle(shapeColor);
    } else if (shape === 'square') {
      shapeElement = new Square(shapeColor);
    }

    const svg = new SVG
    svg.setShape(shapeElement)
    svg.setText(text, textColor)

    return svg.svgTag();

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
        return saveLogoToFile(filename, svgCreate);
      })
      .then(() => {
         console.log('Generated File Successfully!');
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });

}

function saveLogoToFile(filename, svgMarkup) {
    const { writeFile } = require('fs/promises');
    return writeFile(filename, svgMarkup);
  }

  startLogoGenerator();
