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
    .then(colAnswer =>{
      resolve(new Shape(shapeAnswer.shape, colAnswer.color, text));
    });
  })
  .catch(err =>{
    reject(err);
  });
});