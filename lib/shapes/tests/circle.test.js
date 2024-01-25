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
    const circle = new Circle(color, 200, 200);
    expect(circle.render()).toEqual(
    `<circle cx="${circle.width * .5}" cy="${circle.height * .5}" r="${(circle.width + circle.height) * .24}"
    stroke="${color}" fill="${color}" stroke-width="5"/>`
    );
  });
})