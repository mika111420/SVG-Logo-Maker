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