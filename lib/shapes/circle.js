module.exports = class Circle{
  constructor(color){
    this.color = color;
  }
  render(){
    return `<circle cx="100" cy="100" r="95"
    stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
  }
}