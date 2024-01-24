const inquire = require('inquirer');
const Triangle = require('./lib/shapes');
const fs = require('fs/promises');
const Shape = require('./lib/shapes');

// const tri = new Triangle();
// console.log(tri.render());
const shape = new Shape("square");
console.log(shape.render());
fs.writeFile('shape.html', shape.render())
.then(()=>console.log("Complete"))
.catch(err=>console.log(err));