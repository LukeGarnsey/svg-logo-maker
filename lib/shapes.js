const Circle = require('./shapes/circle');
const Square = require('./shapes/square');
const Triangle = require('./shapes/triangle');

module.exports = class Shapes{
  
  constructor(shapeType, color){
    if(!availableShapes.hasOwnProperty(shapeType))
      throw new Error('Shape type does not exist');

    this.shapeType = shapeType;
    this.color = color;
    // console.log(availableShapes[this.shapeType]);
    this.shape = availableShapes[this.shapeType](color);
    console.log(this.shape);
  }
  render(){
    return this.shape.render();
  }
}

const availableShapes = {
  "square": (color) => { return new Square(color); },
  "triangle": (color) => { return new Triangle(color) },
  "circle": (color) => { return new Circle(color) }
}

