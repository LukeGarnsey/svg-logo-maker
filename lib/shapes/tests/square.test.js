const Square = require('../square');

describe("Square", ()=>{
  it('Is the correct instance', ()=>{
    const square = new Square("red");
    expect(square).toBeInstanceOf(Square);
  });
  it('Sets the color variable correctly', ()=>{
    const color = "red";
    const square = new Square("red");
    expect(square.color).toEqual(color);
  });
  it('Test render function returns correct value', ()=>{
    const color = "red";
    const square = new Square(color);
    expect(square.render()).toEqual(
    `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="200" height="200"
    stroke="${color}" fill="${color}" stroke-width="5"/>
    </svg>`
    );
  });
});