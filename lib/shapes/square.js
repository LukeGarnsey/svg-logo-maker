module.exports = class Square{
  constructor(color, width, height){
    this.color = color;
    this.width = width;
    this.height = height;
  }
  anchorPointX(){
    return .5;
  }
  anchorPointY(){
    return .5;
  }
  render(){
    return `<rect x="5" y="5" width="${this.width - 5}" height="${this.height - 5}"
    stroke="${this.color}" fill="${this.color}" stroke-width="0"/>`
  }
}