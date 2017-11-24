const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const City = require('../models/city');

router.get('/students', (req, res) => {
  Student.find().populate('city').then((students) => {
    res.json(students);
  })
});

router.post('/students', (req, res) => {
  let student = req.body.name;
  students.push(student);
  res.send(student);
});

router.patch('/students/:id', (req, res) => {
  let student = Student.findById(req.params.id)
  validateFound(animal)
  res.json(animal)
})

router.delete('/students/:id', (req, res) => {
  let student = Student.findById(req.params.id);
  student.remove().then(() => {
    res.send(student);
  })
});

router.get('/cities', (req, res) => {
  City.find().then((cities) => {
    res.json(cities);
  })
});

router.post('/cities', (req, res) => {
  let city = req.body.name;
  students.push(student);
  res.send(student);
});

router.delete('/cities/:id', (req, res) => {
  let city = City.findById(req.params.id);
  city.remove().then(() => {
    res.redirect('/api/cities');
  })
});

module.exports = router;
