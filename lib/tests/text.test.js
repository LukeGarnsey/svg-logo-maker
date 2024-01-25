const Text = require(`../text`);

describe('Text', ()=>{
  it('Text is type of Text', ()=>{
    const text = new Text("aaa", "", 0, 0, 0);
    expect(text).toBeInstanceOf(Text);
  });
  it('Throw error if text is more then 3 characters', ()=>{
    expect(()=>new Text("1234", "", 0, 0, 0)).toThrow(new Error('Text is more then 3'));
  })
  describe('Text sets its values correctly', ()=>{
    const x = 100;
    const y = 100;
    const size = 60;
    const color = "black";
    const text = "LMG";
    const textObj = new Text(text, color, x, y, size);
    it('Sets the x value in Text correctly',
      ()=>{ expect(textObj.x).toEqual(x)});
    it('Sets the y value in Text correctly', 
      ()=>{expect(textObj.y).toEqual(y)});
    it('Sets the text value in Text correctly',
      ()=>{ expect(textObj.text).toEqual(text)});
    it('Sets the color value in Text correctly',
      ()=>{expect(textObj.color).toEqual(color)});
    it('Sets the size value in Text correctly', 
      ()=>{expect(textObj.size).toEqual(size)});
  });
  
  it('Text render function returns correct string', ()=>{
    const x = 100;
    const y = 100;
    const size = 60;
    const color = "black";
    const text = "LMG";
    const textObj = new Text(text, color, x, y, size);
    expect(textObj.render()).toEqual(
    `<text x="${x}" y="${y}" font-size"${size}"
     text-anchor="middle" fill="${color}">${text}</text>`
    );
  });
});