module.exports = class Circle{
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
    return `<circle cx="${this.width * .5}" cy="${this.height * .5}" r="${(this.width + this.height) * .24}"
    stroke="${this.color}" fill="${this.color}" stroke-width="0"/>`
  }
}