const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const api = require('./routes/api')
let students = require('./students')

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

// API routes
app.use('/api', api);

// User views
app.get('/students', (req, res) => {
  res.render('students', {students});
});

app.post('/students', (req, res) => {
  let student = req.body.student_name;
  students.push(student);
  res.redirect('/students')
});

app.listen(port);
