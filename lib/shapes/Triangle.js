module.exports = class Triangle{
  constructor(color){
    this.color = color;
  }
  render(){
    return `<?xml version="1.0" standalone="no"?>
    <svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100 0 200 250 0 250"
    stroke="${this.color}" fill="${this.color}" stroke-width="5"/>
    </svg>`
  }
}