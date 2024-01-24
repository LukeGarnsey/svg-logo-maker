const Shapes = require('../shapes');
const Triangle = require('../shapes/triangle');
const Square = require('../shapes/square');
const Circle = require('../shapes/circle');

describe(`Shapes`, ()=>{
  it('Shapes is the correct type', ()=>{
    const shape = new Shapes("square");
    expect(shape).toBeInstanceOf(Shapes);
  });
  it("Throw error if shape type does not exist", ()=>{
    const shapeType = "star";
    expect(() =>new Shapes(shapeType)).toThrow(new Error('Shape type does not exist'));
  });
  it("Shapes shapeType variable is set correctly", ()=>{
    const shapeType = "square";
    const shape = new Shapes(shapeType);
    expect(shape.shapeType).toEqual(shapeType);
  });
  it("shapeType (square) is set to the correct instance type", ()=>{
    const shape = new Shapes("square");
    expect(shape.shape).toBeInstanceOf(Square);
  });
  it("shapeType (triangle) is set to the correct instance type", ()=>{
    const shape = new Shapes("triangle");
    expect(shape.shape).toBeInstanceOf(Triangle);
  });
  it("shapeType (circle) is set to the correct instance type", ()=>{
    const shape = new Shapes("circle");
    expect(shape.shape).toBeInstanceOf(Circle);
  });

});