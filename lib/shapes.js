class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('render() method must be implemented in child class');
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<svg><polygon points="50,150 250,150 150,50" fill="${this.color}" /></svg>`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<svg><circle cx="150" cy="100" r="50" fill="${this.color}" /></svg>`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<svg><rect x="100" y="50" width="100" height="100" fill="${this.color}" /></svg>`;
    }
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square,
  };
  