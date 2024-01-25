module.exports = class Square{
  constructor(color){
    this.color = color;
  }
  render(){
    return `<rect x="0" y="0" width="200" height="200"
    stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
  }
}