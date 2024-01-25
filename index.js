const inquire = require('inquirer');
const fs = require('fs/promises');
const Shape = require('./lib/shapes');
const Text = require('./lib/text');

const text = new Text("LMG", "red", 100, 100 + 10, 60);
const shape = new Shape("circle", "black", text);

console.log(shape.render());

fs.writeFile('shape.svg', shape.render())
.then(()=>console.log("Complete"))
.catch(err=>console.log(err));