module.exports = class Triangle{
  constructor(color){
    this.color = color;
  }
  render(){
    return `<polygon points="100 0 200 250 0 250"
    stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
  }
}