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
    return `<polygon points="${this.width * .5} 5 ${this.width - 5} ${this.height - 5} 5 ${this.height -5}"
    stroke="${this.color}" fill="${this.color}" stroke-width="0"/>`
  }
  
}