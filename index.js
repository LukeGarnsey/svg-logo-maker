const inquire = require('inquirer');
const fs = require('fs/promises');
const {AvailableShapes, Shape} = require('./lib/shapes');
const Text = require('./lib/text');



const questions = [
  {
    type:'list',
    name:'shape',
    message:'What shape would you like?',
    choices: AvailableShapes
  }
];

inquire.prompt(questions)
.then((answers) =>{
  const text = new Text("LMG", "red", 100, 100 + 10, 60);
  const shape = new Shape(answers.shape, "black", text);

  console.log(shape.render());

  fs.writeFile('shape.svg', shape.render())
  .then(()=>console.log("Complete"))
  .catch(err=>console.log(err));
});