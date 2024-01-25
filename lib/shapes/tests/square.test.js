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
    const square = new Square(color, 200, 200);
    expect(square.render()).toEqual(
    `<rect x="5" y="5" width="${square.width -5}" height="${square.height-5}"
    stroke="${color}" fill="${color}" stroke-width="0"/>`
    );
  });
});