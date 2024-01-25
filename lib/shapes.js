const Circle = require('./shapes/circle');
const Square = require('./shapes/square');
const Triangle = require('./shapes/triangle');

module.exports.Shape = class Shapes{
  
  constructor(shapeType, color, text, width, height){
    if(!availableShapes.hasOwnProperty(shapeType))
      throw new Error('Shape type does not exist');

    this.shapeType = shapeType;
    this.color = color;
    this.shape = availableShapes[this.shapeType](color, width, height);
    
    this.width = width;
    this.height = height;
    
    if(text === undefined)
      return;
    this.text = text;
    this.text.x = width * this.shape.anchorPointX();
    this.text.y = height * this.shape.anchorPointY();
  }
  render(){
    return `<svg width="${this.width}" height="${this.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${this.shape.render()}
    ${this.text.render()}
    </svg>`
  }
}

const availableShapes = {
  "square": (color, width, height) => { return new Square(color, width, height); },
  "triangle": (color, width, height) => { return new Triangle(color, width, height) },
  "circle": (color, width, height) => { return new Circle(color, width, height) }
}

module.exports.AvailableShapes = Object.keys(availableShapes);

