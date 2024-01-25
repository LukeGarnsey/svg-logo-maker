const Shapes = require('../shapes');
const Triangle = require('../shapes/triangle');
const Square = require('../shapes/square');
const Circle = require('../shapes/circle');
const Text = require('../text');

describe(`Shapes`, ()=>{
  it('Shapes is the correct type', ()=>{
    const shape = new Shapes("square");
    expect(shape).toBeInstanceOf(Shapes);
  });
  it("Throw error if shape type does not exist", ()=>{
    const shapeType = "star";
    expect(() =>new Shapes(shapeType)).toThrow(new Error('Shape type does not exist'));
  });
  describe('Shapes variables set correctly', ()=>{
    const shapeType = "square";
    const color = "white";
    const text = new Text("LMG", "black", 0, 0, 0);
    const shape = new Shapes(shapeType, color, text);
    it("shapeType set correctly", 
      ()=>{expect(shape.shapeType).toEqual(shapeType); });
    it("color set correctly", 
      ()=>{expect(shape.color).toEqual(color); });
    it("text set correctly", 
      ()=>{expect(shape.text).toEqual(text); });
  });
  
  describe('Correct instance type set from shapeType', ()=>{
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

});