const Circle = require('./shapes/circle');
const Square = require('./shapes/square');
const Triangle = require('./shapes/triangle');
const Text = require('./text');

module.exports.Shape = class Shapes{
  
  constructor(shapeType, color, text){
    if(!availableShapes.hasOwnProperty(shapeType))
      throw new Error('Shape type does not exist');

    this.shapeType = shapeType;
    this.color = color;
    // console.log(availableShapes[this.shapeType]);
    this.shape = availableShapes[this.shapeType](color);
    this.text = text;
    this.text.x = 200 * .5;
    this.text.y = 200 * .55;
  }
  render(){
    return `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${this.shape.render()}
    ${this.text.render()}
    </svg>`
  }
}

const availableShapes = {
  "square": (color) => { return new Square(color); },
  "triangle": (color) => { return new Triangle(color) },
  "circle": (color) => { return new Circle(color) }
}

module.exports.AvailableShapes = Object.keys(availableShapes);

