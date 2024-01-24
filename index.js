const inquire = require('inquirer');
const fs = require('fs/promises');
const Shape = require('./lib/shapes');

// const tri = new Triangle();
// console.log(tri.render());
const shape = new Shape("triangle", "red");
console.log(shape.render());
fs.writeFile('shape.svg', shape.render())
.then(()=>console.log("Complete"))
.catch(err=>console.log(err));