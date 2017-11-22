const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let students = ['Scott', 'Simon'];

app.use(bodyParser.json());

app.get('/students', function (req, res) {
  res.send(students);
});

app.post('/students', function (req, res) {
  let student = req.body.name;
  students.push(student);
  res.send(student);
});

app.listen(port);
