module.exports = class Triangle{
  constructor(color, width, height){
    this.color = color;
    this.width = width;
    this.height = height;
  }
  anchorPointX(){
    return .5;
  }
  anchorPointY(){
    return .9;
  }
  render(){
    return `<polygon points="${this.width * .5} 0 ${this.width} ${this.height} 0 ${this.height}"
    stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
  }
  
}