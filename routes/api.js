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

module.exports = router;
