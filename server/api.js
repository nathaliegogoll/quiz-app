const express = require('express');
const jsondb = require('./db.json');
const csharpdb = require('./csharpdb.json');
const reactdb = require('./reactdb.json')

const app = express();

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

const getRandom = file => {
  const res = { questions: []};
  const takenNumbers = [];
  const lengthOfObject = file.questions.length;
  while(res.questions.length < 7 ) {
    const randomNumber = Math.floor(Math.random() * lengthOfObject);
    console.log(randomNumber)
    if (takenNumbers.includes(randomNumber)) {
      continue;
    } else {
      res.questions.push(file.questions[randomNumber]);
      takenNumbers.push(randomNumber)
    }
  }
  return res;
}

app.get('/javascript', async (request, response) => {
    res = getRandom(jsondb);
    response.json(res);
  });

app.get('/csharp', async (request, response) => {
  res = getRandom(csharpdb);
  response.json(res);
});

app.get('/react', async (request, response) => {
  res = getRandom(reactdb);
  response.json(res);
});  

module.exports = app;