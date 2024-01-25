const fs = require('fs/promises');
const Text = require('./lib/text');
const textPrompt = require('./lib/prompts/text-prompt');
const shapePrompt = require('./lib/prompts/shape-prompt');
const inputPrompt = require('./lib/prompts/input-prompt');

textPrompt().then(textObj => {
  shapePrompt(textObj).then(shapeObj =>{
    inputPrompt("What should I name the SVG file?").then(fileName =>{
      fs.writeFile(`./output/${fileName}.svg`, shapeObj.render())
      .then(()=>console.log("Complete"))
      .catch(err=>console.log(err));
    });
  });
})
