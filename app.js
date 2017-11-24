const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const api = require('./routes/api');
const Student = require('./models/student');
const City = require('./models/city');


app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

// API routes
app.use('/api', api);

// User views
app.get('/students', (req, res) => {
  Promise.all([
    Student.find().populate('city'),
    City.find(),
  ]).then(([students, cities]) => {
    console.log(students);
    res.render('students', {
      students,
      cities,
    });
  })
});

app.post('/students', (req, res) => {
  let student_name = req.body.student_name;
  let city_id = req.body.city_id
  Student.create({name: student_name, city: city_id}).then(() => {
    res.redirect('/students');
  })
});

app.get('/students/:id', (req, res) => {
  Student.findById(req.params.id).populate('city').then((student) =>
    res.render('student', {student})
  )
});

app.get('/cities', (req, res) => {
  City.find().then((cities) => {
    res.render('cities', {cities});
  })
});

app.post('/cities', (req, res) => {
  let city_name = req.body.city_name;
  City.create({name: city_name}).then(() => {
    res.redirect('/cities');
  })
});

app.get('/cities/:id', (req, res) => {
  City.findById(req.params.id).then((city) => {
    res.render('city', {city})
  })
});

app.listen(port);
