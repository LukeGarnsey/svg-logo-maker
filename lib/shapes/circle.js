module.exports = class Circle{
  constructor(color){
    this.color = color;
  }
  render(){
    return `<?xml version="1.0" standalone="no"?>
    <svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="95"
    stroke="${this.color}" fill="${this.color}" stroke-width="5"/>
    </svg>`
  }
}