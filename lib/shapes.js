class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('render() method must be implemented in child class');
    }
  }
  
  class Triangle extends Shape {
    constructor(shapeColor){
        super(shapeColor)
    }
    render() {
      return `<polygon points="50,150 250,150 150,50" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    constructor(shapeColor){
        super(shapeColor)
    }
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" /></circle>`;
    }
  }
  
  class Square extends Shape {
    constructor(shapeColor){
        super(shapeColor)
    }
    render() {
      return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" /></rect>`;
    }
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square,
  };
  