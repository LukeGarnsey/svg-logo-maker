module.exports = class Square{
  constructor(color){
    this.color = color;
  }
  render(){
    return `<?xml version="1.0" standalone="no"?>
    <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100 0 200 250 0 250"
    stroke="green" fill="${this.color}" stroke-width="10"/>
    </svg>`
  }
}