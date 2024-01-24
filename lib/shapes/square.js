module.exports = class Square{
  constructor(color){
    this.color = color;
  }
  render(){
    return `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="200" height="200"
    stroke="${this.color}" fill="${this.color}" stroke-width="5"/>
    </svg>`
  }
}