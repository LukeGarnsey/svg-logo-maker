const Circle = require('./shapes/circle');
const Square = require('./shapes/square');
const Triangle = require('./shapes/triangle');

module.exports = class Shapes{
  constructor(shapeType){
    if(!availableShapes.hasOwnProperty(shapeType))
      throw new Error('Shape type does not exist');

    this.shapeType = shapeType;
    this.shape = availableShapes[this.shapeType];
  }
  render(){
    return this.shape.render();
  }
}

const availableShapes = {
  "square": new Square("red"),
  "triangle": new Triangle("green"),
  "circle": new Circle("blue")
}