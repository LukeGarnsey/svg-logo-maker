const inquire = require('inquirer');
const color = require('./color');
const Text = require('../text');

module.exports = () => new Promise((resolve, reject) => {
  inquire.prompt([
    {
      type:'input',
      name:'text',
      message:'What text would you like to display?(max-3)'
    }
  ])
  .then(textAnswers => {
      color(`text(${textAnswers.text})`).then(colAnswer=>{
        resolve(new Text(textAnswers.text, colAnswer.color, 0, 0, 60));
      });
      
  })
  .catch(err =>{
    reject(err);
  });
});