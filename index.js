const fs = require('fs/promises');
const Text = require('./lib/text');
const textPrompt = require('./lib/prompts/text-prompt');
const colorPrompt = require('./lib/prompts/color');
const shapePrompt = require('./lib/prompts/shape-prompt');

textPrompt().then(textObj => {
  shapePrompt(textObj).then(shapeObj =>{
    fs.writeFile('shape.svg', shapeObj.render())
    .then(()=>console.log("Complete"))
    .catch(err=>console.log(err));
  });
})
