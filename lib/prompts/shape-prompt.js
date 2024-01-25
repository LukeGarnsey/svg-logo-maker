const inquire = require('inquirer');
const {AvailableShapes, Shape} = require('../shapes');
const color = require('./color');

module.exports = (text) => new Promise((resolve, reject) => {
  inquire.prompt([
    {
      type:'list',
      name:'shape',
      message:'What text would you like to display?(max-3)',
      choices: AvailableShapes
    }
  ])
  .then((shapeAnswer) => {
    color(shapeAnswer.shape)
    .then(color =>{
      resolve(new Shape(shapeAnswer.shape, color, text, 300, 300));
    });
  })
  .catch(err =>{
    reject(err);
  });
});