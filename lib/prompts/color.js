const inquire = require('inquirer');


module.exports = (objectName) => new Promise((resolve, reject) => {
  inquire.prompt([
    {
      type:'input',
      name:'color',
      message:`What color would you like the ${objectName}?`
    }
  ])
  .then((answers) => {
      resolve(answers);
  })
  .catch(err =>{
    reject(err);
  });
});