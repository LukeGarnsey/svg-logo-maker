const Triangle = require('../triangle');

describe("Triangle", ()=>{
  it('Is the correct instance', ()=>{
    const triangle = new Triangle("red");
    expect(triangle).toBeInstanceOf(Triangle);
  });
  it('Sets the color variable correctly', ()=>{
    const color = "red";
    const triangle = new Triangle("red");
    expect(triangle.color).toEqual(color);
  });
  it('Test render function returns correct value', ()=>{
    const color = "red";
    const triangle = new Triangle(color);
    expect(triangle.render()).toEqual(
    `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100 0 200 250 0 250"
    stroke="${color}" fill="${color}" stroke-width="5"/>
    </svg>`
    );
  });
})