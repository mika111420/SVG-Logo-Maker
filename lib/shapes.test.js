const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('render method should return SVG markup with the given shape color', () => {
    const triangle = new Triangle('red');
    const expectedMarkup = `<svg><polygon points="50,150 250,150 150,50" fill="red" /></svg>`;
    expect(triangle.render()).toBe(expectedMarkup);
  });
});

describe('Circle', () => {
  test('render method should return SVG markup with the given shape color', () => {
    const circle = new Circle('blue');
    const expectedMarkup = `<svg><circle cx="150" cy="100" r="50" fill="blue" /></svg>`;
    expect(circle.render()).toBe(expectedMarkup);
  });
});

describe('Square', () => {
  test('render method should return SVG markup with the given shape color', () => {
    const square = new Square('green');
    const expectedMarkup = `<svg><rect x="100" y="50" width="100" height="100" fill="green" /></svg>`;
    expect(square.render()).toBe(expectedMarkup);
  });
});
