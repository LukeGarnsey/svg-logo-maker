const inquire = require('inquirer');
const Triangle = require('./lib/shapes');
const fs = require('fs/promises');

const tri = new Triangle();
console.log(tri.render());

fs.writeFile('shape.html', tri.render()).then(()=>console.log("Complete")).catch(err=>console.log(err));