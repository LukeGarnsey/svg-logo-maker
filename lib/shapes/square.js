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
    return `<rect x="0" y="0" width="${this.width}" height="${this.height}"
    stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
  }
}