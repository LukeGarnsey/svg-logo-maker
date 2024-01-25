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
    `<polygon points="100 0 200 250 0 250"
    stroke="${color}" fill="${color}" stroke-width="5"/>`
    );
  });
})