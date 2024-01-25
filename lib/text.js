module.exports = class text{
  constructor(text, color, x, y, size){
    if(text.length > 3)
      throw new Error('Text is more then 3');
    this.text = text;
    this.color = color;
    this.x = x;
    this.y = y;
    this.size = size;
  }
  render(){
    return `<text x="${this.x}" y="${this.y}" font-size="${this.size}"
     text-anchor="middle" fill="${this.color}">${this.text}</text>`;
  }
}