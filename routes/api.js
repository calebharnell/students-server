const express = require('express');
let router = express.Router();
let students = require('../students')

router.get('/students', (req, res) => {
  res.send(students);
});

router.post('/students', (req, res) => {
  let student = req.body.name;
  students.push(student);
  res.send(student);
});

module.exports = router;
