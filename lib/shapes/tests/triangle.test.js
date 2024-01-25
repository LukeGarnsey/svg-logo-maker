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
    const triangle = new Triangle(color, 200, 200);
    expect(triangle.render()).toEqual(
    `<polygon points="${triangle.width * .5} 0 ${triangle.width} ${triangle.height} 0 ${triangle.height}"
    stroke="${color}" fill="${color}" stroke-width="5"/>`
    );
  });
})