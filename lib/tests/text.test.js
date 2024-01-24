const Text = require(`../text`);

describe('Text', ()=>{
  it('Text is type of Text', ()=>{
    const text = new Text("aaa", "", 0, 0, 0);
    expect(text).toBeInstanceOf(Text);
  });
  it('Throw error if text is more then 3 characters', ()=>{
    expect(()=>new Text("1234", "", 0, 0, 0)).toThrow(new Error('Text is more then 3'));
  })
})