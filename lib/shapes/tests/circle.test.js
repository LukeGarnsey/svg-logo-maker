const Circle = require('../circle');

describe("Circle", ()=>{
  it('Is the correct instance', ()=>{
    const circle = new Circle("red");
    expect(circle).toBeInstanceOf(Circle);
  });
  it('Sets the color variable correctly', ()=>{
    const color = "red";
    const circle = new Circle("red");
    expect(circle.color).toEqual(color);
  });
  it('Test render function returns correct value', ()=>{
    const color = "red";
    const circle = new Circle(color);
    expect(circle.render()).toEqual(
    `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="95"
    stroke="${color}" fill="${color}" stroke-width="5"/>
    </svg>`
    );
  });
})