const inquire = require('inquirer');
const color = require('./color');
const Text = require('../text');
const inputPrompt = require("./input-prompt");

const promiseMethod = () => new Promise((resolve, reject) => {
  inputPrompt("What text would you like to display?(max-3)")
  .then(text =>{
    return new Text(text, "", 0, 0, 80);
  })
  .then((textObj)=>{
    color(`text(${textObj.text})`).then(color=>{
      textObj.color = color;
      resolve(textObj);
    });
  })
  .catch(err =>{
    if(err.message === "Text is more then 3"){ //set font size
      resolve(promiseMethod()); // Tell user they are wrong
    }
    reject(err);
  });
});

module.exports = promiseMethod;


  // inquire.prompt([
  //   {
  //     type:'input',
  //     name:'text',
  //     message:'What text would you like to display?(max-3)'
  //   }
  // ])
  // .then(textAnswers => {
  //     color(`text(${textAnswers.text})`).then(colAnswer=>{
  //       resolve(new Text(textAnswers.text, colAnswer.color, 0, 0, 80));
  //     });
      
  // })
  // .catch(err =>{
  //   reject(err);
  // });
